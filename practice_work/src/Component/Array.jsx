import React from 'react'

export default function Array() {
    let React_topic = ["State" , "Routing" , "Component" , "Map" , "Props"]
  return (
    <div>
        <h2> React Topic </h2>
      {       
        React_topic.map((s)=>(

           
            <p>{s}</p>
        ))
      }
    </div>
  )
}
