import React, { useState } from 'react';
// import './HotelBookingForm.css'; // Import the CSS file

export default function Hotel_booking() {
    let [cname, setCname] = useState("");
    let [cemail, setCemail] = useState("");
    let [cphone, setCphone] = useState("");
    let [persons, setPersons] = useState(0);
    let [stayDays, setStayDays] = useState(1);
    let [checkinDate, setCheckinDate] = useState("");
    let [checkinTime, setCheckinTime] = useState("");

    function handleSubmit() {
        console.log(`Customer Name: ${cname}`);
        console.log(`Customer Email: ${cemail}`);
        console.log(`Customer Phone: ${cphone}`);
        console.log(`Number of Persons: ${persons}`);
        console.log(`Days of Stay: ${stayDays}`);
        console.log(`Check-in Date: ${checkinDate}`);
        console.log(`Check-in Time: ${checkinTime}`);
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-lg p-4 border-0 rounded-lg">
                        <h1 className="text-center">Hotel Booking Form</h1>

                        <div className="mb-4 row">
                            <label htmlFor="cname" className="col-sm-4 col-form-label">Customer Name</label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cname"
                                    placeholder="Enter Your Full Name"
                                    value={cname}
                                    onChange={(e) => setCname(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="cemail" className="col-sm-4 col-form-label">Customer Email</label>
                            <div className="col-sm-8">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="cemail"
                                    placeholder="Enter Your Email"
                                    value={cemail}
                                    onChange={(e) => setCemail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="cphone" className="col-sm-4 col-form-label">Customer Phone</label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cphone"
                                    placeholder="Enter Your Phone Number"
                                    value={cphone}
                                    onChange={(e) => setCphone(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="persons" className="col-sm-4 col-form-label">No. of Persons</label>
                            <div className="col-sm-8">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="persons"
                                    placeholder="Enter Number of Persons"
                                    value={persons}
                                    onChange={(e) => setPersons(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="stayDays" className="col-sm-4 col-form-label">Days of Stay</label>
                            <div className="col-sm-8">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="stayDays"
                                    placeholder="Enter Number of Stay Days"
                                    value={stayDays}
                                    onChange={(e) => setStayDays(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="checkinDate" className="col-sm-4 col-form-label">Check-in Date</label>
                            <div className="col-sm-8">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="checkinDate"
                                    value={checkinDate}
                                    onChange={(e) => setCheckinDate(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="checkinTime" className="col-sm-4 col-form-label">Check-in Time</label>
                            <div className="col-sm-8">
                                <input
                                    type="time"
                                    className="form-control"
                                    id="checkinTime"
                                    value={checkinTime}
                                    onChange={(e) => setCheckinTime(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="text-center">
                            <button
                                className="btn btn-primary w-100 text-white font-weight-bold mt-4 py-3"
                                onClick={handleSubmit}
                            >
                                Submit Booking
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
