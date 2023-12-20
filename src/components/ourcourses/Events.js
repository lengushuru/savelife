import React from 'react'

const Events = ({img,dsc}) => {
  return (
    <div className="eventdiv">
    <div className="eventimage">
      <img src={img}/>
    </div>
    <div>
      <p>{dsc}</p>
      <button className="homebtn btnevent">Read more</button>
    </div>
  </div>
  )
}

export default Events