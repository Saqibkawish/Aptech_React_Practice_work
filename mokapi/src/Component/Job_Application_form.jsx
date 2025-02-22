import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Job_Application_form = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        dob: "",
        gender: "Male",
        position: "Software Engineer",
        salary: "",
        startDate: "",
        employmentType: "Full-time",
        qualification: "High School",
        university: "",
        experience: "",
        company: "",
        linkedin: "",
        referral: "LinkedIn"
    });
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-80 bg-light">
            <div className="card p-4 shadow-lg" style={{ width: "500px", borderRadius: "10px" }}>
                <h2 className="text-center fw-bold text-primary">Job Application</h2>
                <form onSubmit={handleSubmit}>
                    {Object.entries({
                        "Full Name": "fullName",
                        "Email Address": "email",
                        "Phone Number": "phone",
                        "Date of Birth": "dob",
                        "Expected Salary": "salary",
                        "Available Start Date": "startDate",
                        "University/Institute Name": "university",
                        "Years of Experience": "experience",
                        "Previous Company Name": "company",
                        "LinkedIn Profile": "linkedin",
                    }).map(([label, name]) => (
                        <div className="mt-3" key={name}>
                            <label className="form-label fw-bold">{label}</label>
                            <input type={name.includes("email") ? "email" : name.includes("date") ? "date" : "text"} className="form-control" name={name} value={formData[name]} onChange={handleChange} required />
                        </div>
                    ))}
                    {Object.entries({
                        "Gender": ["Male", "Female", "Other"],
                        "Position Applied For": ["Software Engineer", "Designer", "Manager"],
                        "Employment Type": ["Full-time", "Part-time", "Internship"],
                        "Highest Qualification": ["High School", "Bachelor's", "Master's", "PhD"],
                        "How did you hear about this job?": ["LinkedIn", "Company Website", "Referral", "Other"]
                    }).map(([label, options]) => (
                        <div className="mt-3" key={label}>
                            <label className="form-label fw-bold">{label}</label>
                            <select className="form-control" name={label.toLowerCase().replace(/ /g, "")} value={formData[label.toLowerCase().replace(/ /g, "")]} onChange={handleChange} required>
                                {options.map(option => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                    ))}
                    <button className="btn btn-primary w-100 fw-bold mt-4" type="submit">SUBMIT</button>
                </form>
                {submittedData && (
                    <div className="mt-4 p-3 border rounded bg-white">
                        <h4 className="text-center text-success">Submitted Data</h4>
                        {Object.entries(submittedData).map(([key, value]) => (
                            <p key={key}><strong>{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> {value}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Job_Application_form;
