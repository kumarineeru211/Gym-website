import React, { useState } from "react";
import { Link } from "react-router-dom";
import header from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsXCircle } from "react-icons/bs";
import { showHome } from "../../locaStorage/localStorage";
import { useRecoilState } from "recoil";

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(showHome);
  return (
    <div className={header.nav}>
      <Link to={"/home"}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaED3-rJgpu5AjeppalRNp9K3o9tGfWSPJw&usqp=CAU"
          alt=""
          style={{
            borderRadius: "50%",
            marginTop: "3px",
            height: "3rem",
            filter: "negative",
            marginLeft: "30px",
          }}
        />
      </Link>
      <div>
        <span
          className={header.button}
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? (
            <span>
              <BsXCircle style={{ fontSize: "40px" }} />
            </span>
          ) : (
            <GiHamburgerMenu style={{ fontSize: "40px" }} />
          )}
        </span>
        <div
          className={isVisible ? header.mobileLink : header.Link}
          onClick={() => setIsVisible(false)}
        >
          <Link to={"/aboutus"}>About</Link>
          <Link to={"/training"}>What We Provide? </Link>
          <Link to={"/trainer"}> Our Trainers</Link>
          <Link to={"/pricing"}>Our Plans </Link>
          <Link to={"/"} onClick={() => setIsLogin(false)}>
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
