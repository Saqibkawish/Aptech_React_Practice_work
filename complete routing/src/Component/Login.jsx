import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    let [name, setName] = useState('');
    let [password, setPassword] = useState('');
    let [msg, setMsg] = useState('');
    let [show, setShow] = useState(false);
    let pagechange = useNavigate();

    function login_logic(){
        if(name === "killer" && password === "killer"){
            pagechange('/ser',{state :{a: "Message fromlogin page", b : name}});
            setMsg("")
        } else {
            setMsg("Invalid credentials");
            setShow(true);
        }
    }
  return (
    <div>
      <div className="container">
      <h2>Login</h2>
        
        <div>
          <label >Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label >Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <button className='btn btn-primary my-3'  onClick={login_logic}>Login</button>
    </div>
    </div>
  )
}
