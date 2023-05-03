import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./AboutUs.module.css";
// import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.Header}>
          <Header />
        </div>
        <div className={style.container}>
          <div className={style.video}>
            <iframe
              src="https://www.youtube.com/embed/j528loCi-lI"
              frameBorder="0"
              // height="280"
              // width="500"
              allowFullScreen={true}
              title="Gym video1"
            ></iframe>
          </div>
          <div className={style.txt}>
            <h1>About US</h1>
            <p>
              <b>
                Anytime Fitness is a franchise of 24-hour health and fitness
                clubs that is headquartered in Woodbury, Minnesota, United
                States. The company operates over 5,000 franchised locations in
                50 countries. The gym facilities are open 24 hours a day, 365
                days of the year.
              </b>
            </p>
          </div>
        </div>

        <div className={style.container2}>
          <div className={style.txt}>
            <h1>Why Choose us</h1>
            <p>
              <b>Better equipment:</b>
            </p>
            <p>
              <b>Expert trainers: </b>
            </p>
            <p>
              <b>Special amenities:</b>
            </p>
            <p>
              <b>Community atmosphere: </b>
            </p>
          </div>
          <div className={style.video2}>
            <iframe
              src="https://www.youtube.com/embed/tUykoP30Gb0"
              frameBorder="0"
              allowFullScreen={true}
              title="Gym video2"
            ></iframe>
          </div>
        </div>
        <div className={style.Footer}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
