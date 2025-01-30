import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Registration() {
  
let [ name,setName] = useState()
  let [email, setEmail] = useState()
  let [password, setPassword] = useState()
  let loginpage = useNavigate()

  function submit(){
    loginpage ("/login")


  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="text-center mb-4">Registration Form</h3>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(f) => setEmail(f.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    value={password}
                    onChange={(h) => setPassword(h.target.value)}
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                  <button type="button" className="btn btn-primary" onClick={submit}>Register</button>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
