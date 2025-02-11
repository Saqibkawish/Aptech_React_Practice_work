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
            <div className="container mt-5">
                <div className="card shadow-lg">
                    <div className="card-header bg-primary text-white">
                        <h3 className="text-center fw-bold">Login Form</h3>
                    </div>
                    <div className="card-body">
                        <div>
                            {/* Name */}
                            <div className="mb-3 row">
                                <label htmlFor="firstName" className="col-sm-3 col-form-label">
                                    Name:
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter your Name"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="mb-3 row">
                                <label htmlFor="email" className="col-sm-3 col-form-label">
                                    Password:
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your Password"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="text-center">
                                <button
                                    type="button"
                                    className="btn btn-primary px-5"
                                    onClick={login_logic}
                                >
                                    Submit
                                </button>
                                {show && <div className="alert alert-danger mt-3">{msg}</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
