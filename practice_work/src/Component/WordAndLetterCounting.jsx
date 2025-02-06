import React, { useState } from 'react'

export default function WordAndLetterCounting() {
    let [msg , setMsg] = useState ("")
    let [lettercount , setletterCount] = useState (0)
    let [wordcount , setWordCount] = useState(0)
    function handleChange(e) {
        let msg_txt  = e.target.value;
        let wocount = msg_txt.trim().split(/\s+/).length
        setMsg(msg_txt)
        setletterCount(msg_txt.length)
        setWordCount(wocount)
    }
  return (
    <div>
    <div className='container'>
      <p> Enter Your Message</p>
      <textarea className='form-control my-3' placeholder='Enter Your Message' value={msg} onChange={handleChange}></textarea>

      <p> Message is <b>{msg}</b> and Counting is : <b>{lettercount} word Count is <b>{wordcount}</b></b></p>
    </div>
    </div>
  )
}
