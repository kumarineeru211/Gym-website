import React from "react";
import Carousel from "./Carousel.jsx";
import  Heading from "../Header/Header.jsx";
import './Carousel.css'
import Footer from "../Footer/Footer.jsx";
function Tranning() {
  const data = [
    {
      image:
        "https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg",
      caption: "Body Building",
    },
    {
      image:
        "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg",
      caption: "Yoga",
    },
    {
      image:
        "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Strength training",
    },
    {
      image:
        "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
      caption: "Extreme Exercise",
    },
    {
      image:
        "https://images.pexels.com/photos/4498151/pexels-photo-4498151.jpeg",
      caption: "Aerobic",
    },
    {
      image:
        "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
      caption: "Core exercises",
    },
    {
      image:
        "https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg",
      caption: "Warm-up exercises",
    },
{
      image:
        "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
      caption: "Running",
    },
    {
      image:
        "https://images.pexels.com/photos/7801364/pexels-photo-7801364.jpeg",
      caption: "Wake up and Workout",
    },
    {
      image:
        "https://images.pexels.com/photos/3076516/pexels-photo-3076516.jpeg",
      caption: "Cardio Exercise",
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
  
  return (<>
      <Heading/>
    <div className="Tranning">
      <div style={{ textAlign: "center" }}>
        <h2 style={{color:"orange" ,fontSize:"5rem"}}>Training Programs</h2>
        <p>
       
        </p>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="1500px"
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
              maxWidth: "1500px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
      <br />
      <br />
      <br />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Tranning;