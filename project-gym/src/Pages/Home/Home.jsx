import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import HomeCss from "./Home.module.css";
import Footer  from "../Footer/Footer";
function Home() {
  const Array = [
    {
      id: 1,
      image:
        "https://c4.wallpaperflare.com/wallpaper/365/221/282/gym-brunette-girl-wallpaper-preview.jpg",
    },
    {
      id: 2,
      image:
        "https://www.ukactive.com/wp-content/uploads/2017/01/ukactive-boutique-fitness-physical-activity.jpg",
    },
    {
      id: 3,
      image: "https://picfiles.alphacoders.com/289/289817.jpg",
    },
    {
      id: 4,
      image:
        "https://westwon.co.uk/wp-content/uploads/2018/02/iStock-597959750.jpg",
    },
    {
      id: 5,
      image: "https://d.newsweek.com/en/full/1524142/cardio-workout.jpg",
    },
  ];
  const [data, setData] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((data) => (data + 1) % Array.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Header />
      <div className={HomeCss.mainDiv}>
        <img src={Array[data].image} alt="" />
        <h1 className={HomeCss.intro}>
          “The harder you work and the more prepared you are for something,
          you’re going to be able to persevere through anything.”
        </h1>
      </div>
      <div><Footer/> </div>
    </>
  );
}

export default Home;
