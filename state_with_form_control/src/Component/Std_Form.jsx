import React, { useState } from 'react';

export default function Std_Form() {
    let [ufname, setUfname] = useState("");
    let [ulname, setUlname] = useState("");
    let [email, setEmail] = useState("");
    let [age, setAge] = useState(0);
    let [phone, setPhone] = useState("");
    let [address, setAddress] = useState("");

    function get_Value() {
        console.log(`Your First Name: ${ufname}`);
        console.log(`Your Last Name: ${ulname}`);
        console.log(`Your Email: ${email}`);
        console.log(`Your Age: ${age}`);
        console.log(`Your Phone No: ${phone}`);
        console.log(`Your Address: ${address}`);
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-lg p-5 border-0 rounded-lg bg-light">
                        <h1 className="text-center text-primary mb-4">Student Form</h1>

                        <div className="mb-4 row">
                            <label htmlFor="ufname" className="col-sm-4 col-form-label text-dark">First Name</label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control border-secondary"
                                    id="ufname"
                                    placeholder="Enter Your First Name"
                                    value={ufname}
                                    onChange={(e) => setUfname(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="ulname" className="col-sm-4 col-form-label text-dark">Last Name</label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control border-secondary"
                                    id="ulname"
                                    placeholder="Enter Your Last Name"
                                    value={ulname}
                                    onChange={(e) => setUlname(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="email" className="col-sm-4 col-form-label text-dark">Email</label>
                            <div className="col-sm-8">
                                <input
                                    type="email"
                                    className="form-control border-secondary"
                                    id="email"
                                    placeholder="Enter Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="age" className="col-sm-4 col-form-label text-dark">Age</label>
                            <div className="col-sm-8">
                                <input
                                    type="number"
                                    className="form-control border-secondary"
                                    id="age"
                                    placeholder="Enter Your Age"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="phone" className="col-sm-4 col-form-label text-dark">Phone</label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control border-secondary"
                                    id="phone"
                                    placeholder="Enter Your Phone No"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="address" className="col-sm-4 col-form-label text-dark">Address</label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control border-secondary"
                                    id="address"
                                    placeholder="Enter Your Address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="text-center">
                            <button
                                className="btn btn-primary w-100 text-white font-weight-bold mt-3 py-3"
                                onClick={get_Value}
                                style={{ borderRadius: '30px' }}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
