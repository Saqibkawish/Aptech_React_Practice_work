import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const EmployeForm = () => {
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [designation, setDesignation] = useState("");
    const [department, setDepartment] = useState("");
    const [gender, setGender] = useState("");
    const [message, setMessage] = useState("");
    const [isShow, setIsShow] = useState(false);

    async function handleSubmit() {
        try {
            await axios.post("https://67b418f7392f4aa94fa94a41.mockapi.io/Employe_data", {
                employee_name: name,
                employee_salary: salary,
                employee_email: email,
                employee_password: password,
                employee_designation: designation,
                employee_department: department,
                employee_gender: gender,
            });
            setMessage("Your Data Saved Successfully");
            setIsShow(true);
            clear();
        } catch (error) {
            console.error(error);
        }
    }

    function clear() {
        setName("");
        setSalary("");
        setEmail("");
        setPassword("");
        setDesignation("");
        setDepartment("");
        setGender("");
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-80 bg-light">
            <div className="card p-4 shadow-lg" style={{ width: "400px", borderRadius: "10px" }}>
                <h2 className="text-center fw-bold text-primary">Employee Information</h2>
                <div className="mt-3">
                    <label className="form-label fw-bold">Enter Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Employee Name" />
                </div>

                <div className="mt-3">
                    <label className="form-label fw-bold">Enter Salary</label>
                    <input type="number" className="form-control" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="Employee Salary" />
                </div>

                <div className="mt-3">
                    <label className="form-label fw-bold">Enter Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Employee Email" />
                </div>

                <div className="mt-3">
                    <label className="form-label fw-bold">Enter Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Employee Password" />
                </div>

                <div className="mt-3">
                    <label className="form-label fw-bold">Enter Designation</label>
                    <input type="text" className="form-control" value={designation} onChange={(e) => setDesignation(e.target.value)} placeholder="Employee Designation" />
                </div>

                <div className="mt-3">
                    <label className="form-label fw-bold">Enter Department</label>
                    <input type="text" className="form-control" value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="Employee Department" />
                </div>

                <div className="mt-3">
                    <label className="form-label fw-bold">Select Gender</label>
                    <div className="d-flex gap-3">
                        <div>
                            <input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)} checked={gender === "male"} /> Male
                        </div>
                        <div>
                            <input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)} checked={gender === "female"} /> Female
                        </div>
                        <div>
                            <input type="radio" name="gender" value="other" onChange={(e) => setGender(e.target.value)} checked={gender === "other"} /> Other
                        </div>
                    </div>
                </div>

                <button className="btn btn-primary w-100 fw-bold mt-4" onClick={handleSubmit}>SUBMIT</button>

                {isShow && <h5 className="text-center mt-3 text-success">{message}</h5>}
            </div>
        </div>
    );
};

export default EmployeForm;
