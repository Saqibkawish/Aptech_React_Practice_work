import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Careem_show() {
    let [record, setRecod] = useState([]);
    let [search, setSearch] = useState('')
    let [isshow, setIsShow] = useState(false)
    let [msg, setMsg] = useState('')
    let [sort, setSort] = useState('')

    useEffect(() => {
        axios.get("https://67b418f7392f4aa94fa94a41.mockapi.io/careembooking")
            .then((data_aya) => {
                setRecod(data_aya.data)
            })
            .catch((e) => console.error(e))
    })

    // search logic
    var search_ride = search ?
        record.filter((abc) => abc.fullName.toLowerCase().includes(search.toLowerCase())) :
        record;

    useEffect(() => {
        if (isshow === true) {
            var timer = setTimeout(() => { setIsShow(false) }, 5000)
            return () => clearTimeout(timer)
        }
    }, [isshow])

    if (sort === "az") {
        search_ride = search_ride.sort((a, b) => a.fullName.localeCompare(b.fullName));
    } else if (sort === "za") {
        search_ride = search_ride.sort((a, b) => b.fullName.localeCompare(a.fullName));
    } 

    return (
        <div>
     <div className="container">
        <h1>Careem Booking Records</h1> 
        <Link className='btn btn-warning' to="/booking"> New Booking + </Link> 
        <input type="text"
        placeholder='Enter Name to search  Record' 
        value={search}
        onChange={((a)=>setSearch(a.target.value))}
        className='form-control my-3'
        />
        <select className='form-select my 3' onChange={(s)=>setSort(s.target.value)} >
          <option value=""> Select Sorting Order</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
        </select>
        {isshow &&(
          <h4>{msg}</h4>
        )}

        {
          record.length === 0 ? 
          (
            <p  className="text-center mt-3 text-warning"> No Booking Record Found</p>

          ): 

          
            <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Ride Type</th>
                <th scope="col">PickupLocation</th>
                <th scope="col">DropoffLocation</th>
              </tr>
            </thead>
            <tbody>
           {search_ride.map((a)=>(
          
   <tr>
      <td>{a.fullName}</td>
      <td>{a.email}</td>
      <td>{a.phoneNumber}</td>
      <td>{a.rideType}</td>
      <td>{a.pickupLocation}</td>
      <td>{a.dropoffLocation}</td>
     
      
    </tr>

  
            ))
          }
          
          </tbody>
</table>
        }

        {
          search_ride.length === 0 && 
          (
            <p  className="text-center mt-3 text-warning"> No Booking Record Found</p>
            )
        }
        
     </div>



    </div>
    )
}
