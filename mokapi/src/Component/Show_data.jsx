import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Show_data() {
    let [record , setRecod] = useState ([]);
    let [search , setSearch] = useState ('')
    let [isshow , setIsShow] = useState (false)
    let [msg , setMsg] = useState ('')
    let [sort , setSort] = useState ('')

    useEffect(()=>{
        axios.get("https://67b418f7392f4aa94fa94a41.mockapi.io/Employe_data")
        .then((data_aya)=>{
            setRecod(data_aya.data)
        })
        .catch((e)=>console.error(e))
    })
// search logic
    var search_employee = search ? 
                        record.filter((abc)=>abc.employee_name.toLowerCase().includes(search.toLowerCase())):
                        record;
// delete Logic
      function DeleteRecord(id,employee_name){
        if (window.confirm(`Are You Sur you want to Delete ${employee_name}`)) {
          axios.delete(`https://67b418f7392f4aa94fa94a41.mockapi.io/Employe_data/${id}`)
          .then(()=>{
            setRecod((a)=>a.filter((userrecord)=>userrecord.id !== id))
            setMsg("Record Delete Successfully")
            setIsShow(true)

          })
        }
      }
// timer for msg 

useEffect(()=>{
  if(isshow===true){
    var timer = setTimeout(() => {setIsShow(false)},5000)
    return ()=>clearTimeout(timer)
  }
},[isshow])

if (sort === "az") {
  search_employee = search_employee.sort((a, b) => a.employee_name.localeCompare(b.employee_name)); 
}else if (sort === "za") {
  search_employee = search_employee.sort((a, b) => b.employee_name.localeCompare(a.employee));
  } else if (sort === "asc") {
    search_employee = search_employee.sort((a, b) =>a.employee_salary-b.employee_salary);
  } else if (sort === "dsc") {
    search_employee = search_employee.sort((a, b) =>b.employee_salary-a.employee_salary);
  }

  return (
    <div>
     <div className="container">
        <h1>Employee Record</h1>
        <Link className='btn btn-warning' to="/emply"> Add Employee + </Link> 
        <input type="text"
        placeholder='Enter Name to search Employee' 
        value={search}
        onChange={((a)=>setSearch(a.target.value))}
        className='form-control my-3'
        />
        <select className='form-select my 3' onChange={(s)=>setSort(s.target.value)} >
          <option value=""> Select Starting Order</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
          <option value="asc">Ascending Order</option>
          <option value="dsc">Descending Order</option>

        </select>
        {isshow &&(
          <h4>{msg}</h4>
        )}

        {
          record.length === 0 ? 
          (
            <p  className="text-center mt-3 text-warning"> No Employee Record Found</p>

          ): 

          
            <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Salary</th>
                <th scope="col">Gender</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
           {search_employee.map((a)=>(
          
   <tr>
      <td>{a.employee_name}</td>
      <td>{a.employee_email}</td>
      <td>{a.employee_salary}</td>
      <td>{a.employee_gender}</td>
      <td><i class="btn btn-warning bi bi-pencil-square" data-bs-toggle="modal" data-target="#exampleModal" ></i></td>
      <td><i className="btn btn-danger  bi bi-trash" onClick={()=>DeleteRecord(a.id,a.employee_name)}></i></td>
      
    </tr>

  
            ))
          }
          
          </tbody>
</table>
        }

        {
          search_employee.length === 0 && 
          (
            <p  className="text-center mt-3 text-warning"> No Employee Record Found</p>
            )
        }
        
     </div>

     <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
