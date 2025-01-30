import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  let [opt, setOpt] = useState('');
  const pagechange = useNavigate();

  function handleClick() {
    if (opt === 'karachi') {
      pagechange('/karachi');
    } else if (opt === 'lahore') {
      pagechange('/lahore');
    } else if (opt === 'islamabad') {
      pagechange('/islamabad');
    } else {
      alert('Please select a city');
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="text-center mb-4">Choose a City</h3>
              <div className="form-group mb-3">
                <label htmlFor="citySelect">Select a City:</label>
                <select
                  id="citySelect"
                  className="form-select"
                  value={opt}
                  onChange={(e) => setOpt(e.target.value)}
                >
                  <option value="">Select a city</option>
                  <option value="karachi">Karachi</option>
                  <option value="lahore">Lahore</option>
                  <option value="islamabad">Islamabad</option>
                </select>
              </div>
              <div className="d-grid gap-2">
                <button onClick={handleClick} className="btn btn-primary">
                  Show Selected City
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
