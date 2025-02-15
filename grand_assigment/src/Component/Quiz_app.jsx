import React, { useState } from 'react';
import './QuizApp.css';

export default function Quiz_app() {
    const [q1, setQ1] = useState("");
    const [q2, setQ2] = useState("");
    const [q3, setQ3] = useState("");
    const [q4, setQ4] = useState("");
    const [score, setScore] = useState(0);
    const [wrong, setWrong] = useState(0);
    const [right, setRight] = useState(0);
    const [show, setShow] = useState(false);
    const [pro, setPro] = useState(0.0);

    function Quiz_result() {
        let tempScore = 0;
        let tempRight = 0;
        let tempWrong = 0;

        if (q1 === "Quaid e Azam") {
            tempScore += 10;
            tempRight++;
        } else {
            tempWrong++;
        }

        if (q2 === "Islamabad") {
            tempScore += 10;
            tempRight++;
        } else {
            tempWrong++;
        }

        if (q3 === "1947") {
            tempScore += 10;
            tempRight++;
        } else {
            tempWrong++;
        }

        if (q4 === "Urdu") {
            tempScore += 10;
            tempRight++;
        } else {
            tempWrong++;
        }

        setScore(tempScore);
        setRight(tempRight);
        setWrong(tempWrong);
        setShow(true);
        setPro((tempScore * 100) / 40);
    }

    return (
        <div className="quiz-container">
            <h1 className="title">Quiz App</h1>
            <hr />

            <div className="question-block">
                <h6>1. Who is the Founder of Pakistan?</h6>
                <label><input type="radio" name="q1" value="Allama Iqbal" onChange={(e) => setQ1(e.target.value)} /> Allama Iqbal</label>
                <label><input type="radio" name="q1" value="Quaid e Azam" onChange={(e) => setQ1(e.target.value)} /> Quaid e Azam</label>
                <label><input type="radio" name="q1" value="Liaquat Ali Khan" onChange={(e) => setQ1(e.target.value)} /> Liaquat Ali Khan</label>
            </div>

            <div className="question-block">
                <h6>2. What is the capital of Pakistan?</h6>
                <label><input type="radio" name="q2" value="Karachi" onChange={(e) => setQ2(e.target.value)} /> Karachi</label>
                <label><input type="radio" name="q2" value="Lahore" onChange={(e) => setQ2(e.target.value)} /> Lahore</label>
                <label><input type="radio" name="q2" value="Islamabad" onChange={(e) => setQ2(e.target.value)} /> Islamabad</label>
            </div>

            <div className="question-block">
                <h6>3. Which year did Pakistan gain independence?</h6>
                <label><input type="radio" name="q3" value="1945" onChange={(e) => setQ3(e.target.value)} /> 1945</label>
                <label><input type="radio" name="q3" value="1947" onChange={(e) => setQ3(e.target.value)} /> 1947</label>
                <label><input type="radio" name="q3" value="1950" onChange={(e) => setQ3(e.target.value)} /> 1950</label>
            </div>

            <div className="question-block">
                <h6>4. Which is the national language of Pakistan?</h6>
                <label><input type="radio" name="q4" value="Urdu" onChange={(e) => setQ4(e.target.value)} /> Urdu</label>
                <label><input type="radio" name="q4" value="Punjabi" onChange={(e) => setQ4(e.target.value)} /> Punjabi</label>
                <label><input type="radio" name="q4" value="Sindhi" onChange={(e) => setQ4(e.target.value)} /> Sindhi</label>
            </div>

            <button className="submit-btn" onClick={Quiz_result}>Submit</button>

            {show && (
                <div className="result-block">
                    <h4>Score: {score}</h4>
                    <h4>Right Answers: {right}</h4>
                    <h4>Wrong Answers: {wrong}</h4>
                    <div className="progress">
                        <div className="progress-bar" style={{ width: `${pro}%` }}>{pro}%</div>
                    </div>
                </div>
            )}
        </div>
    );
}
