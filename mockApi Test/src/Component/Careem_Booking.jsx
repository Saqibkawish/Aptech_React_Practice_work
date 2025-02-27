import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

export default function Careem_Booking() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [rideType, setRideType] = useState("");
  const [passengers, setPassengers] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [childSeat, setChildSeat] = useState("");
  const [wheelchair, setWheelchair] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [message, setMessage] = useState("");



  async function book_ride() {
    try {
        await axios.post("https://67b418f7392f4aa94fa94a41.mockapi.io/careembooking", {
            fullName: fullName,
            phoneNumber: phoneNumber,
            email: email,
            pickupLocation: pickupLocation,
            dropoffLocation: dropoffLocation,
            rideType: rideType,
            passengers: passengers,
            pickupTime: pickupTime,
            paymentMethod: paymentMethod,
            promoCode: promoCode,
            childSeat: childSeat,
            wheelchair: wheelchair,
            additionalNotes: additionalNotes,
            agreeToTerms: agreeToTerms,
        });
        setMessage("Your Data Saved Successfully");
        setIsShow(true);
        clear();
    } catch (error) {
        console.error(error);
    }
}

function clear() {
    fullName("");
    phoneNumber("");
    email("");
    pickupLocation("");
    dropoffLocation("");
    rideType("");
    passengers("");
    pickupTime("");
    paymentMethod("");
    promoCode("");
    childSeat("");
    wheelchair("");
    additionalNotes("");
    agreeToTerms("");
}

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">Careem Ride Booking</h2>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="tel" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Pickup Location</label>
            <input type="text" className="form-control" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Drop-off Location</label>
            <input type="text" className="form-control" value={dropoffLocation} onChange={(e) => setDropoffLocation(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Ride Type</label>
            <select className="form-control" value={rideType} onChange={(e) => setRideType(e.target.value)} required>
              <option value="">Select Ride Type</option>
              <option value="Economy">Economy</option>
              <option value="Go Mini">Go Mini</option>
              <option value="Business">Business</option>
              <option value="Bike">Bike</option>
              <option value="Delivery">Delivery</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Number of Passengers</label>
            <input type="number" className="form-control" value={passengers} onChange={(e) => setPassengers(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Pickup Time</label>
            <input type="datetime-local" className="form-control" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Payment Method</label>
            <select className="form-control" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required>
              <option value="">Select Payment Method</option>
              <option value="Cash">Cash</option>
              <option value="Credit/Debit Card">Credit/Debit Card</option>
              <option value="Wallet">Wallet</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Promo Code</label>
            <input type="text" className="form-control" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
          </div>
          <div className="mt-3">
                    <label className="form-label ">Need a Child Seat?</label>
                    <div className="d-flex gap-3">
                        <div>
                            <input type="radio" name="Seat" value="Yes" onChange={(e) => setChildSeat(e.target.value)} checked={childSeat === "Yes"} /> YES
                        </div>
                        <div>
                            <input type="radio" name="Seat" value="No" onChange={(e) => setChildSeat(e.target.value)} checked={childSeat === "No"} /> NO
                        </div>
                       
                    </div>
                </div>
                <div className="mt-3">
                    <label className="form-label ">NWheelchair Accessible?</label>
                    <div className="d-flex gap-3">
                        <div>
                            <input type="radio" name="chair" value="Yes" onChange={(e) => setWheelchair(e.target.value)} wheelchair={childSeat === "Yes"} /> YES
                        </div>
                        <div>
                            <input type="radio" name="chair" value="No" onChange={(e) => setWheelchair(e.target.value)} wheelchair={childSeat === "No"} /> NO
                        </div>
                       
                    </div>
                </div>
          <div className="mb-3">
            <label className="form-label">Additional Notes</label>
            <textarea className="form-control" value={additionalNotes} onChange={(e) => setAdditionalNotes(e.target.value)}></textarea>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" checked={agreeToTerms} onChange={(e) => setAgreeToTerms(e.target.checked)} required />
            <label className="form-check-label">I agree to the Terms & Conditions</label>
          </div>
          <button  className="btn btn-primary w-100 mt-3" onClick={book_ride}>Book Ride</button>

          {isShow && <h5 className="text-center mt-3 text-success">{message}</h5>}

      </div>
    </div>
  );
}
