import React from 'react'

const Navbottom = () => {
  return (
  <div className='navbottom'>
    <img  className = 'logo' src = './logo.png' alt='logo' />
    <ul>
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