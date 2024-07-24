import React from "react";
import { Carousel } from "react-bootstrap";
import "./HomeCarousel.css";

const HomeCarousel = () => (
  <Carousel className="custom-carousel">
    <Carousel.Item>
      <img
        className="d-block w-100 carousel-image"
        src="/images/sports_day.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Annual Sports Day - Celebrating Excellence in Sports</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carousel-image"
        src="/images/science_exhibition.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Science Exhibition - Showcasing Student Innovations</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carousel-image"
        src="/images/cultural_fest.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Cultural Fest - Embracing Diversity and Creativity</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default HomeCarousel;
