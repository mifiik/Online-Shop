import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './carusel.css'
import A6 from '../img/A6.jpg'
import A8 from '../img/A8.jpg'
import BMW7 from '../img/BMW7.jpg'
import BMWX5 from '../img/BMWX5.jpg'
import E39 from '../img/E39.jpg'
import Ferrari from '../img/ferrari.jpg'
import Lamborghini from '../img/Lamborghini.jpg'
import octavia from '../img/octavia.jpg'
import superb from '../img/superb.jpg'
import X6 from '../img/X6.jpg'

function CarouselBox() {
   return (
      <>
         <Carousel>
            <Carousel.Item>
               <img
                  className="images"
                  src={A6}
                  alt="First slide"
               />
               <Carousel.Caption>
                  <h3>AUDI A6</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="images"
                  src={A8}
                  alt="Second slide"
               />

               <Carousel.Caption>
                  <h3>AUDI A8</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="images"
                  src={BMW7}
                  alt="Third slide"
               />

               <Carousel.Caption>
                  <h3>BMW 7</h3>
                  <p>
                     Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
               </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
               <img
                  className="images"
                  src={BMWX5}
                  alt="First slide"
               />
               <Carousel.Caption>
                  <h3>BMW 5</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
               <img
                  className="images"
                  src={E39}
                  alt="First slide"
               />
               <Carousel.Caption>
                  <h3>E39</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
               <img
                  className="images"
                  src={Ferrari}
                  alt="First slide"
               />
               <Carousel.Caption>
                  <h3>FERRARI</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
               <img
                  className="images"
                  src={Lamborghini}
                  alt="First slide"
               />
               <Carousel.Caption>
                  <h3>LAMBORGHINI</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
               <img
                  className="images"
                  src={octavia}
                  alt="First slide"
               />
               <Carousel.Caption>
                  <h3>SKODA OCTAVIA</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
               <img
                  className="images"
                  src={superb}
                  alt="First slide"
               />
               <Carousel.Caption>
                  <h3>SKODA SUPERB</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
               <img
                  className="images"
                  src={X6}
                  alt="First slide"
               />
               <Carousel.Caption>
                  <h3>BMW X6</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               </Carousel.Caption>
            </Carousel.Item>
         </Carousel>
      </>
   )
}

export default CarouselBox