import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import { ImFacebook2, ImYoutube } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.footer_title}>
          <h2>
            <span>The Warehouse Gym</span>
          </h2>
          <p>Your Body Temple</p>

          <div className={style.social_icons}>
            <Link to={"https://www.facebook.com/"}>
              <ImFacebook2 className={style.icons} />
            </Link>
            <Link to={"https://www.linkedin.com/"}>
              <BsLinkedin className={style.icons} />
            </Link>
            <Link to={"https://twitter.com/"}>
              <ImWhatsapp className={style.icons} />
            </Link>
            <Link to={"https://www.youtube.com/"}>
              <ImYoutube className={style.icons} />
            </Link>
          </div>
        </div>

        <div className={style.footer_content}>
          <hr />
          <ul>
            <h3>
              <span>The Warehouse Gym</span>
            </h3>
            <Link to="/home">Home</Link>
            <Link to="/aboutus">AboutUs</Link>
            <Link to="/training">Traning</Link>
          </ul>

          <ul>
            <h3>
              <span>Services</span>
            </h3>
            <Link to="/">Apply Online</Link>
            <Link>Available Positions</Link>
          </ul>

          <ul>
            <h3>
              <span>About Us</span>
            </h3>
            <Link to="/trainer">Meet Our Team</Link>
            <Link>Our Responsibilities</Link>
            <Link>Our Codes</Link>
            <Link>Our Values</Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
