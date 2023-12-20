import React from "react";
import "./Ourcourses.css";
import Events from "./Events";
// import oldlady from '/images/oldlady.jpeg'

const eventsData = [
  {
    image: "/images/donatefood.jpeg",
    description: "some event description will be shown here<",
  },
  {
    image: "/images/meetup.jpeg",
    description: "some event description will be shown here<",
  },
  {
    image: "/images/visitElderly.jpeg",
    description: "some event description will be shown here<",
  },
  {
    image: "/images/visitPWD.jpeg",
    description: "some event description will be shown here<",
  },
  {
    image: "/images/oldlady.jpeg",
    description: "some event description will be shown here<",
  },
];

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
      <div className="eventContainer">
      {eventsData.map((e) => (
        <Events key={eventsData.indexOf(e)} img={e.image} dsc={e.description} />
      ))}
      </div>
    </section>
  );
};

export default Ourcourses;
