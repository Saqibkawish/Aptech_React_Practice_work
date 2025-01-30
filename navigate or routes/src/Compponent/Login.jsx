import React, { useState } from 'react'

export default function Login() {
let [ name,setName] = useState()
let [password, setPassword] = useState()


  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card shadow-lg">
          <div className="card-body">
            <h3 className="text-center mb-4">login Form</h3>
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
                  <button type="button" className="btn btn-primary" >Login</button>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
