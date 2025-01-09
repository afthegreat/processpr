import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
function Slideshowhtml() {
  return (
    <div>
      <h1>wellcome to radio</h1>

      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <div className="align">
            <span className="slide-first">
              <img src={image1} alt="slideshow1" />
              <img src={image2} alt="slideshow2" />
              <img src={image3} alt="slideshow3" />{" "}
            </span>
          </div>
          {/* <navigation starts  /> */}
          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            {/* <navigation ends  /> */}
            {/* <manual navigation starts /> */}
            <div className="navigation-manual">
              <label for="radio1" className="manual-btn"></label>
              <label for="radio2" className="manual-btn"></label>
              <label for="radio3" className="manual-btn"></label>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-primary rounded-pill px-3" type="button">
        Primary
      </button>
    </div>
  );
}

export default Slideshowhtml;
