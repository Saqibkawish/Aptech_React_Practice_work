import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Welcome() {
    const navigate = useNavigate();

    function back(){
        navigate ('/')
    }
  return (
    <div>
        <h1>Welcome to new page</h1>
        <button> Back</button>
        
      
    </div>
  )
}
