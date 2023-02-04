import React from "react";
import "./Body.css";
import Img from "./image1.png";
function body() {
  return (
    <>
      <div className="body_container">
        <div className="body_container_top">
          {" "}
          <h2>Education is the key to unlock the golden door of freedom.</h2>
        </div>
        <div className="body_container_middle">
          <div className="body_container_middle_left">
            <h1>
              Learn to code
              <br />
              Practice
              <br />
              interview Preparation
            </h1>
          </div>
          <div className="body_container_middle_right">
            <img src={Img} alt="img" />
          </div>
        </div>

        <div className="body_container_bottom">
          <div className="body_container_bottom_left">
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--_pyWGSyD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/w9u60357jk4ozdho7urq.jpg" className="image"
              alt="img_js"
            />
            <h1>JavaScript</h1>
            <p>Learn JavaScript. The world's most popular language</p>
          </div>
          <div className="body_container_bottom_right">
            <img
            className="image"
              src="https://blog.effectussoftware.com/wp-content/uploads/2020/02/What-is-React-JS.jpg"
              alt="img_react"
            />
            <h1>React</h1>
            <p>Learn React. The world's most popular Javascript library</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default body;
