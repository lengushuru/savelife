import React from "react";
import "./Ourcourses.css";
import Events from "./Events";
import {eventData} from "./eventdata.js"
import { useState } from 'react';
// import oldlady from '/images/oldlady.jpeg'

const eventsData = eventData

const Ourcourses = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="content_container">
      <h2 className="title2">Our out courses</h2>
      <p className="course_text">
        we help hundreds of children to get there education
        <br />
        now we need your help to continue this
      </p>
      <div className="sec_top">
        <div className="imagediv">
          <img src="/images/meetup.jpeg" alt="image"/>
        </div>
        <div className="textdiv">
          <h3>FEATURED</h3>
          <h4>SHAPE A FUTURE</h4>
          <p>some text will go here describing the displayed course</p>
        </div>
      </div>
      <div className="eventContainer">
      {eventsData.map((e) => (
        <Events key={eventsData.indexOf(e)} img={e.image} full_desc = {e.full_description}dsc={e.description} />
      ))}

      </div>
     
  
    </section>
  );
};

export default Ourcourses;
