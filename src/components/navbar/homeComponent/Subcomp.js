import React from 'react'

const Subcomp = (prop) => {
  return (
    <div className='subcomponents'>
      <h2>{prop.title}</h2>
      <p>{prop.description}</p>
      <button>{prop.btn}</button>
    </div>
  )
}

export default Subcomp