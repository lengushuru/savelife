import React from "react";
import "./Ourcourses.css";
// import oldlady from '/images/oldlady.jpeg'

const Ourcourses = () => {
  return (
    <section className="content_container">
      <h2 className="title2">Our out courses</h2>
      <p className="course_text">
        we help hundreds of children to get there education
        <br />
        now we need your help to continue this
      </p>
      <div className="sec_top">
        <div className="imagediv">soem tex will be here</div>
        <div className="textdiv">
          <h3>FEATURED</h3>
          <h4>SHAPE A FUTURE</h4>
          <p>some text will go here describing the displayed course</p>
        </div>
      </div>
      <div className="eventdiv">
        <div className="eventimage">
          <img src="/images/oldlady.jpeg" alt="event1"/>
        </div>
        <div>
          <p>some event description will be shown here</p>
          <button className="homebtn btnevent">Read more</button>
        </div>
      </div>
    </section>
  );
};

export default Ourcourses;
