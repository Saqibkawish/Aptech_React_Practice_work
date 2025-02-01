import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Pincode() {
    let [pin , setPin] = useState ("")
    let welcome = useNavigate ()

    function check_pin(){
        if ( pin === "12345") {
            alert("Correct Pin");
            welcome("/welcome");
        }else{
            alert("Incorrect Pin")
        }
    }

    function reset() {
        setPin("")  
    }
  return (
    <div> <br /> <br /> <br /> <br /> <br /> <br />
        <h1>Enter Your Pincode</h1>
      <input type="text"  placeholder='Type Number' value={pin} onChange={(p)=>setPin(p.target.value)}/>  <br /> <br />
      <button className="submit-btn btn btn-primary mt-auto" onClick={check_pin}>Submit</button>  &nbsp; &nbsp;
       <button className='btn btn-danger mt-auto'  onClick={reset}>Clear</button>
    </div>
  )
}
