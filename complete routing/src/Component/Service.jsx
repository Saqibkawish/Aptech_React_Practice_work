import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Service() {
    let locate = useLocation ();
    let msg  = locate.state?.a;
    let user_name  = locate.state?.b;
  return (
    <div>
      <h3>Welcome {user_name}</h3>
      <p> {msg}</p>

    </div>
  )
}
