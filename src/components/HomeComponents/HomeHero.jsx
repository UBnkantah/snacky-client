import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pizzaImg from "../../assets/pizzahero.png"
import "../../styles/Global.styles.css"

const HomeHero = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="vh-75">
        <img
          className="d-block w-100 h-100"
          src={pizzaImg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='vh-75'>
        <img
          className="d-block h-100 w-100"
          src="https://smartdemowp.com/snacky/wp-content/uploads/2022/01/banner-1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='vh-75'>
        <img
          className="d-block w-100 h-100"
          src="https://smartdemowp.com/snacky/wp-content/uploads/2022/01/banner-3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeHero