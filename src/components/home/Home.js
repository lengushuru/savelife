import React from "react";
import Subcomp from "../navbar/homeComponent/Subcomp";
import "./Home.css";
import {data} from './homedata.js'
const Home = () => {
 
  return (
    <section className="home">
      <h1 className="title">
        <span className="title1">WE HELP HUNDREDS OF PEOPLE TO GET</span><br />
        SHELTER AND FOOD <br />
      </h1>
      <h1 className="title_mobile">
        <span className="title1">WE HELP HUNDREDS OF VULNARABLE PEOPLE TO GET</span><br />
        SHELTER AND FOOD NOW <br />
      </h1>
      <div className="btn_container">
        <button className="btn1 homebtn">learn more</button>
        <button className="btn2 homebtn">Contact us</button>
      </div>
      <div className="home_components">
       {data.map((item,index)=>{
         return <Subcomp key={index} title={item.title} description={item.description}/>
       })}
      </div>
    </section>
  );
};

export default Home;
