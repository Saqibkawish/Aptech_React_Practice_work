import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ShorData() {
    let [record,setRecord]= useState([])
    let [serach,setSerach]= useState("")
    let [sort,setSort]= useState("")
    let [msg,setMsg]= useState("")
    let [isShow,setisShow]= useState(false)

// 1
    // txtboxstate
    let [name, setName]=useState("")
    let [email, setEmail]=useState("")
    let [gender, setGender]=useState("")
    let [pswd, setPSwd]=useState("")
    let [id, setId]=useState(null)
    let [age, setAge]=useState(0)


// 2
    function fetch_Record(a,b,c,d,e,f){
      setName(a)
      setEmail(b)
      setPSwd(c)
      setGender(d)
      setAge(e)
      setId(f)

    }

    useEffect(()=>{
      axios.get("https://67ad7f0e3f5a4e1477ddd8fd.mockapi.io/Student")
      .then((data_aya)=>{
        setRecord(data_aya.data)
      })
      .catch((e)=>console.error(e))
    })
// Delete Logic
    function DeleteRecord(studentid,stuName){
        if(window.confirm(`Are You Sure You Want to Delete ${stuName} Record`)){
            axios.delete(`https://67ad7f0e3f5a4e1477ddd8fd.mockapi.io/Student/${studentid}`)
            .then(()=>{
                setRecord((a)=>a.filter((userrecord)=>userrecord.id !== studentid))
                setMsg("Record Deleted Successfully")
                setisShow(true)
            })
        }            
    }

    // 5
    // Update Logic

    function UpdateLogic(){
      axios.put(`https://67ad7f0e3f5a4e1477ddd8fd.mockapi.io/Student/${id}`,
        {
          StuName: name,
          Stu_Email: email,
          PAssword:pswd,
          Age: age,
          Gender: gender,
        }
      )
      .then(()=>{
        setRecord((i)=>i.map((a)=>a.id ===  id ? {...a, 
          StuName: name,
          Stu_Email: email,
          PAssword:pswd,
          Age: age,
          Gender: gender,} : a))
          setMsg("Record Updated Successfully")
          setisShow(true)
      }).catch((e)=>{console.error(e)})
    }
    // Timer for Msg
    useEffect(()=>{
      if (isShow===true) {
        var timer = setTimeout(()=>{setisShow(false)},2000)
        return()=>clearTimeout(timer)
      }
    },[isShow])

    var search_Student = serach ?
                        record.filter((abc)=>abc.StuName.toLowerCase().
                        includes(serach.toLowerCase())) :
                        record;

    if (sort === "asc") {
        search_Student = search_Student.sort((a,b)=>a.Age-b.Age)
    } else if(sort === "desc"){
        search_Student = search_Student.sort((a,b)=>b.Age-a.Age)
    }
    else if(sort === "az"){
        search_Student = search_Student.sort((a,b)=>a.StuName.localeCompare(b.StuName))
    }
    else if(sort === "za"){
        search_Student = search_Student.sort((a,b)=>b.StuName.localeCompare(a.StuName))
    }

  return (
    <div className='container'>
            <h1>Student Data</h1>
            <Link className='btn btn-warning my-3' to="/cr">Add Student +</Link>
            <input type="text" 
            placeholder='Enter name to search student'
            value={serach}
            onChange={(E)=>setSerach(E.target.value)}
            className="form-control my-3" 
            />

            <select  className="form-select my-3"
            onChange={(E)=>setSort(E.target.value)}>
                <option value="">Select Sorting Order</option>
                <option value="asc">Ascending Order</option>
                <option value="desc">Descending Order</option>
                <option value="az">A-Z Order</option>
                <option value="za">Z-A Order</option>
            </select>

            {/* Delete Msg */}
            { isShow &&
            (
                <h4>{msg}</h4>
            ) }
            <div className="row">
                {  record.length === 0 ?
                    ( 
                        <p style={{color:"red"}}>No Student Record Found</p>
                    ) :
                    (
                        search_Student.map((a)=>(
                            <div className="col-md-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">{a.StuName}</h4>
                                        <p class="card-text">{a.Stu_Email}</p>
                                        <p class="card-text">{a.Age}</p>
                                        <button className='btn btn-danger' 
                                        onClick={()=>DeleteRecord(a.id,a.StuName)}>Remove 
                                        <i class="bi bi-trash-fill"></i></button>
                                        <button className="mx-2 btn btn-warning"  data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        onClick={()=>
                                        {fetch_Record(a.StuName,a.Stu_Email,a.PAssword,a.Gender,a.Age,a.id)}}>//3
                                        Update <i class="bi bi-pencil-fill"></i>
                                        </button>

                                    </div>
                                </div>
                                
                            </div>
                        ))
                    )  
            }


            {
                search_Student.length === 0 &&
                (
                    <p style={{color:"red",textAlign:"center"}}> No Searched Record Found</p>
                ) 
            }
            </div>

      


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update Student Record</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {/* 4 */}
        <input type="text" className='form-control my-3' 
        value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input type="email" className='form-control my-3'  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="password" className='form-control my-3'  value={pswd} onChange={(e)=>{setPSwd(e.target.value)}}/>
        <input type="number" className='form-control my-3'  value={age} onChange={(e)=>{setAge(e.target.value)}}/>
        <input type='radio' name="gender" value="m" onChange={(e)=>{setGender(e.target.value)}} checked={gender === "m"}/>&nbsp;Male&nbsp;
        <input type='radio' name="gender" value="fm"   onChange={(e)=>{setGender(e.target.value)}} checked={gender === "fm"}/>&nbsp;Female

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary close_btn" data-bs-dismiss="modal">Close</button>
        {/* 6 */}
        <button type="button" class="btn btn-primary" onClick={()=>{
          UpdateLogic()
          document.querySelector(".close_btn").click()  
          }}>Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
s