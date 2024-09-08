import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

const CarouselComponent = ({ items }) => (
  <Carousel>
    {items.map((item, index) => (
      <Carousel.Item key={index}>
        <Image
          className="d-block w-100"
          src={item.src}
          alt={item.alt}
        />
        <Carousel.Caption>
          <h3>{item.caption}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default CarouselComponent;
