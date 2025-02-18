import React, { useState } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

const Login_form = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setuserEmail] = useState("");
    const [userPassword, setuserPassword] = useState("");
    const [userGender, setuserGender] = useState("");

    async function submit() {
        try {
            let axios_response = await axios.post("https://67ad80733f5a4e1477dddd40.mockapi.io/userdata", {
                name: userName,
                email: userEmail,
                password: userPassword,
                gender: userGender,
            });
            console.log(axios_response);
            alert("User created successfully");

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="login-container">

            <div className="login-card">
                <h2 className="text-center fw-bold">Employee Information</h2>
                <p className="text-center">Enter These Credentials</p>

                <form>
                    <div className="mb-3">
                        <label className="form-label fw-bold">- User Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Enter Username"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">- User Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={userEmail}
                            onChange={(e) => setuserEmail(e.target.value)}
                            placeholder="Enter Email"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">- Enter Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={userPassword}
                            onChange={(e) => setuserPassword(e.target.value)}
                            placeholder="Enter Password"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">- Enter Gender</label>
                        <input
                            type="text"
                            className="form-control"
                            value={userGender}
                            onChange={(e) => setuserGender(e.target.value)}
                            placeholder="Enter Gender"
                        />
                    </div>

                    <button className="btn btn-primary w-100 fw-bold mt-3" onClick={submit}>
                        Login
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Login_form;