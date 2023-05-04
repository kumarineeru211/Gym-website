import React from "react";
import Header from "../Header/Header";
import style from "./App.module.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

function TrainerSection() {
  return (
    <>
      <Header />
      <div className={style.mainWrapper}>
        <div className={style.headingDiv}>
          <h1>Our Professional Trainner</h1>
        </div>
        <div className={style.container}>
          <div className={style.div1}>
            <img
              className={style.div2}
              alt="trainer"
              src="https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg"
            />
            <p className={style.div3}>Dickerson</p>
          </div>
          <div className={style.div1}>
            <img
              className={style.div2}
              alt="trainer"
              src="https://images.pexels.com/photos/4058411/pexels-photo-4058411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <p className={style.div3}>Mitchell </p>
          </div>
          <div className={style.div1}>
            <img
              className={style.div2}
              alt="trainer"
              src="https://images.pexels.com/photos/6296010/pexels-photo-6296010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <p className={style.div3}>Williamson</p>
          </div>
        </div>
        <Link to={"/team"} className="link-tag">
          {" "}
          <button className={style.btn}>Meet Our Team</button>{" "}
        </Link>
      </div>
      <Footer/>
    </>
  );
}

export default TrainerSection;
