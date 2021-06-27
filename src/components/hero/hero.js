import React from "react";
import { Carousel } from "react-bootstrap";

import "./hero.css";

import Hero1 from "../../assets/images/hero1.jpg";
import Hero2 from "../../assets/images/hero2.jpg";
import Hero3 from "../../assets/images/hero3.jpg";

const Hero = () => (
  <>
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={Hero1} alt="First slide" />
        <Carousel.Caption>
          <div classname="heroCaption">
            <h1>Czy wiesz, że kominiarz przynosi szczęście?</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Hero2} alt="Second slide" />

        <Carousel.Caption>
          <div classname="heroCaption">
            <h1>Czy wiesz, że kominiarz przynosi szczęście?</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Hero3} alt="Third slide" />

        <Carousel.Caption>
          <div classname="heroCaption">
            <h1>Czy wiesz, że kominiarz przynosi szczęście?</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>
);
export default Hero;
