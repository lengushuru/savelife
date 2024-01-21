import React from 'react'
import { useState } from 'react';
const Events = ({img,dsc,full_desc}) => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="eventdiv">
    <div className="eventimage">
      <img src={img}/>
    </div>
    <div>
      <p>{dsc}</p>
      {/* <button className="homebtn btnevent">Read more</button> */}
    
      <button className="homebtn btnevent"onClick={openPopup}>Read more</button>

      {showPopup && (
        <div className="full-screen-popup">
          <div className="popup-content">
            <p>{full_desc}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default Events