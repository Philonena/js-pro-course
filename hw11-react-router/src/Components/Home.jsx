import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';


export default function Home() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/img/img3.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/img/img2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/img/img1.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>);
}

