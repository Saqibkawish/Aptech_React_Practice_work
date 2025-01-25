import React, { useState } from 'react';
import './Quizarray.css' ;

export default function QuizWithArray() {
  let [radiostate, setRadioState] = useState({});
  let [score, setScore] = useState(0);
  let [wrong, setWrong] = useState(0);
  let [right, setRight] = useState(0);
  let [flag, setFlag] = useState(false);

  let Quiz_array = [
    {
      qno: 1,
      question: "Who's the founder of Pakistan?",
      options: ["Quaid -e Azam", "Allama Iqbal", "Modi"],
      correct: "Quaid -e Azam"
    },
    {
      qno: 2,
      question: "What is the capital of Pakistan?",
      options: ["Karachi", "Islamabad", "Lahore"],
      correct: "Islamabad"
    },
    {
      qno: 3,
      question: "In which year did Pakistan gain independence?",
      options: ["1947", "1950", "1965"],
      correct: "1947"
    },
    {
      qno: 4,
      question: "Who was the first Prime Minister of Pakistan?",
      options: ["Liaquat Ali Khan", "Benazir Bhutto", "Nawaz Sharif"],
      correct: "Liaquat Ali Khan"
    },
    {
      qno: 5,
      question: "Which city is known as the 'City of Lights' in Pakistan?",
      options: ["Karachi", "Lahore", "Islamabad"],
      correct: "Karachi"
    },
    {
      qno: 6,
      question: "What is the national language of Pakistan?",
      options: ["Urdu", "Punjabi", "English"],
      correct: "Urdu"
    },
    {
      qno: 7,
      question: "Who was the first President of Pakistan?",
      options: ["Iskander Mirza", "Zulfiqar Ali Bhutto", "Pervez Musharraf"],
      correct: "Iskander Mirza"
    },
    {
      qno: 8,
      question: "What is the national animal of Pakistan?",
      options: ["Markhor", "Lion", "Elephant"],
      correct: "Markhor"
    },
    {
      qno: 9,
      question: "Which mountain is the highest in Pakistan?",
      options: ["K2", "Nanga Parbat", "Mount Everest"],
      correct: "K2"
    },
    {
      qno: 10,
      question: "Who was the founder of the All India Muslim League?",
      options: ["Allama Iqbal", "Muhammad Ali Jinnah", "Syed Ahmad Khan"],
      correct: "Syed Ahmad Khan"
    },
    {
      qno: 11,
      question: "In which year was Pakistan's constitution adopted?",
      options: ["1956", "1962", "1973"],
      correct: "1973"
    }
  ];

  function get_value(q, r) {
    setRadioState((a) => ({
      ...a,
      [q]: r
    }));
  }

  function QuizLogic() {
    console.log(radiostate);
    Quiz_array.map((abc) => {
      if (radiostate[abc.qno] === abc.correct) {
        setScore(score + 5);
        setRight(right + 1);
      } else {
        setWrong(wrong + 1);
      }
    });
    setFlag(true);
  }

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Quiz About Pakistan</h1>
      <hr />
      {Quiz_array.map((a) => (
        <div className="question-container" key={a.qno}>
          <h3 className="question">{a.qno}. {a.question}</h3>
          <div className="options-container">
            {a.options.map((o, i) => (
              <label className="option-label" key={i}>
                <input type="radio" value={o} name={`q${a.qno}`} className="option-input" onChange={() => get_value(a.qno, o)} />
                {o}
              </label>
            ))}
          </div>
        </div>
      ))}

      <button className="submit-btn" onClick={QuizLogic}>
        Submit
      </button>
      <br />

      {flag && (
        <div className="result-container">
          <h3 className="result-title">Quiz Results</h3>
          <div className="result-details">
            <div className="result-item">
              <span className="result-label">Score:</span>
              <span className="result-value">{score}</span>
            </div>
            <div className="result-item">
              <span className="result-label">Right Answers:</span>
              <span className="result-value">{right}</span>
            </div>
            <div className="result-item">
              <span className="result-label">Wrong Answers:</span>
              <span className="result-value">{wrong}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
