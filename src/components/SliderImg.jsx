import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "./SliderImg.css";
export default function App() {
  const [imageNum, setImageNum] = useState(1);

  const sliderImages = [
    {
      url: "http://localhost:4000/file-bucket/1589743596506amina.jpg",
    },
    {
      url: "http://localhost:4000/file-bucket/1589743602933carla.jpg",
    },
    {
      url: "http://localhost:4000/file-bucket/1589743606893flotfyr.jpeg",
    },
    {
      url: "http://localhost:4000/file-bucket/1589743612191frida.jpeg",
    },
    {
      url: "http://localhost:4000/file-bucket/1589743618350pava.jpeg",
    },
    {
      url: "http://localhost:4000/file-bucket/1589743622345pia.jpg",
    },
    {
      url: "http://localhost:4000/file-bucket/1589743626930polly.jfif",
    },
    {
      url: "http://localhost:4000/file-bucket/1589743632335primula.jfif",
    },
    {
      url: "http://localhost:4000/file-bucket/1589743636008tristan.jpg",
    },
  ];
  return (
    <div className="slider">
      <h2 className="blueText sliderHeaderText">
        Vores søde dyr, som venter på at få et nyt hjem
      </h2>
      <SimpleImageSlider
        width={window.innerWidth > 768 ? 1135 : window.innerWidth - 40} // window.innerWidth - 40 er bredden af parent elementet
        height={window.innerWidth > 768 ? 500 : (window.innerWidth - 40) * 0.8} 
        images={sliderImages}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={3}
      />
    </div>
  );
}
