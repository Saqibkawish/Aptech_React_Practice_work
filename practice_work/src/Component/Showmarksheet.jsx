import React from 'react'

export default function Showmarksheet(props) {
  return (
    <div>
        <div className="result">
    <p>Total: {props.t}</p>
    <p>Percentage: {props.p}%</p>
    <p style={{ color: props.c }}>Grade: {props.g}</p>
    <img src={props.i}  className="grade-img"  />
  </div>
  </div>
  )
}
