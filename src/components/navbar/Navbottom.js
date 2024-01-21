import React from 'react'
import { useState } from 'react'

const Navbottom = () => {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }
  return (
  <div className={`navbottom ${show ? 'open':''}`}>
    <img  className = {`logo ${show ? 'close':'open'}`} src = './logo.png' alt='logo' />
    <div className={`menu ${show ? 'close':'open'}`} onClick={handleShow}>
    ☰
    </div>
    <ul className={`${show ? 'open':'close'}`}>
      <li>Home</li>
      <li>About</li>
      <li>Course</li>
      <li>Event</li>
      <li>Blog</li>
      <li>Contact</li>
    </ul>
    <button className='btnnav'>donate now</button>
  </div>
  )
}

export default Navbottom