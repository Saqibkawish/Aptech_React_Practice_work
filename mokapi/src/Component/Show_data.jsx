import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Show_data() {
    let [record , setRecod] = useState ([]);
    let [search , setSearch] = useState ('')

    useEffect(()=>{
        axios.get("https://67b418f7392f4aa94fa94a41.mockapi.io/Employe_data")
        .then((data_aya)=>{
            setRecod(data_aya.data)
        })
        .catch((e)=>console.error(e))
    })

    var search_employee = search ? 
                        record.filter((abc)=>abc.employee_name.toLowerCase().includes(search.toLowerCase())):
                        record;
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
              </tr>
            </thead>
            <tbody>
           {search_employee.map((a)=>(
          
   <tr>
      <td>{a.employee_name}</td>
      <td>{a.employee_email}</td>
      <td>{a.employee_salary}</td>
      <td>{a.employee_gender}</td>
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
    </div>
  )
}
