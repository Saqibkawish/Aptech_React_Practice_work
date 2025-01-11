import React, { useState } from 'react';
import Showmarksheet from './Showmarksheet';

export default function Marksheet() {
  let [total, setTotal] = useState(0);
  let [per, setPer] = useState(0);
  let [grade, setGrade] = useState("");
  let [col, setCol] = useState("");
  let [img, setImg] = useState("");
  let [isSubmitted, setIsSubmitted] = useState(false); // New state to track submission

  function marksheet() {
    let eng = parseFloat(prompt("Enter Your English Marks"));
    let urdu = parseFloat(prompt("Enter Your Urdu Marks"));
    let maths = parseFloat(prompt("Enter Your Math Marks"));

    let totalMarks = eng + urdu + maths;
    setTotal(totalMarks);

    let percentage = totalMarks / 3;
    setPer(percentage.toFixed(2));

    if (percentage >= 90) {
      setGrade("A+");
      setCol("green");
      setImg("https://as2.ftcdn.net/v2/jpg/03/22/16/89/1000_F_322168985_nnvP9gDJZZUWiKGrlW2FAFXJCYpHxLQa.jpg");
    } else if (percentage >= 80) {
      setGrade("A");
      setCol("blue");
      setImg("https://static.vecteezy.com/system/resources/previews/010/838/506/non_2x/3d-a-letter-text-free-png.png");
    } else if (percentage >= 70) {
      setGrade("B");
      setCol("purple");
      setImg("https://w7.pngwing.com/pngs/824/477/png-transparent-letter-b-text-illustration-letter-alphabet-gold-lace-patterns-1-1-miscellaneous-text-b-thumbnail.png");
    } else if (percentage >= 60) {
      setGrade("C");
      setCol("orange");
      setImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJapzZ_12hvjGEMPDNE4jtUsAB3A4SnI4HNA&s");
    } else {
      setGrade("Fail");
      setCol("red");
      setImg("https://w7.pngwing.com/pngs/552/426/png-transparent-illustration-fail-stamp-miscellaneous-text-rectangle-thumbnail.png");
    }

    setIsSubmitted(true); // Mark the form as submitted
  }

  return (
    <div className="marksheet-container">
      <h1 className="heading">Marksheet Generator</h1>
      <button onClick={marksheet} className="button">Enter Marks</button>
      
      {/* Conditionally render the results only if marks have been entered */}
      {isSubmitted && (
 <Showmarksheet t={total} p={per} g={grade} c={col} i={img}  /> 
        
      )}
    </div>
  );
}
