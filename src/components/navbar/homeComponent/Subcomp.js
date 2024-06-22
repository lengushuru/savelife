import React from 'react'
import '../Navbar.css'
const Subcomp = ({title,description,btn}) => {
  return (
    <div className='subcomponents'>
      <h2>{title}</h2>
      <p>{description}</p>
      <button>{btn}</button>
    </div>
  )
}

export default Subcomp