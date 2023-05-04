import React from "react";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import style from "../TrainerSection/App.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Team() {
  const data = [
    {
      image:
        "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
      caption: "Dickerson <br/> CROSSFIT COACH",
      
    },
    {
      image:
        "https://images.pexels.com/photos/4058411/pexels-photo-4058411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Mitchell <br/> PERSONAL TRAINER ",
    },
    {
      image:
        "https://images.pexels.com/photos/6296010/pexels-photo-6296010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Williamson <br/> WRESTLING COACH ", 
    },
    {
      image:
        "https://images.pexels.com/photos/6922165/pexels-photo-6922165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Alexia <BR/> FITNESS SPECIALIST",
    },
    {
      image:
        "https://images.pexels.com/photos/416754/pexels-photo-416754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Jericho <br/> STRENGTH AND CONDITIONING COACH ",
    },
    {
      image:
        "https://images.pexels.com/photos/3912953/pexels-photo-3912953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Raven <br/> WELLNESS COACH",
    },
    {
      image:
        "https://images.pexels.com/photos/1638336/pexels-photo-1638336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Alena <br/> BODY BUILDING COACH",
    },
    {
      image:
        "http://m.gettywallpapers.com/wp-content/uploads/2023/02/Miranda-Cohen-Computer-Wallpaper.jpg",
      caption: "Miranda Cohen <br/> FITNESS COACH",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div className="Tranning">
      <Header/>
      <div style={{ textAlign: "center" }}>
        <h1>Our Professional Team</h1>
        <p>
        We are a team of experienced people, nutrition, sports and fitness<br /> passionate experts with talent and knowledge unsurpassed in the industry. Get to Know us.
        </p>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
          <br/><br/>
           <Link to={'/Trainer'} className="link-tag"> <button className='btnTeam'  >Back</button> </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Team;