import React from "react";
import Subcomp from "../navbar/homeComponent/Subcomp";
import "./Home.css";
import {data} from './homedata.js'
const Home = () => {
 
  return (
    
    <section className="home">
      <h1 className="title">
        <span className="title1">WE HELP THOUSANDS OF CHILDREN TO GET</span><br />
        THEIR EDUCATION SHELTER AND FOOD NOW <br />
        WE NEED YOUR HELP TO CONTINUE THIS
      </h1>
      <div className="btn_container">
        <button className="btn1 homebtn">learn more</button>
        <button className="btn2 homebtn">connect with us</button>
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
