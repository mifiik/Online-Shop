import React from 'react'
import { Carousel } from 'bootstrap'
import { CarouselItem } from 'react-bootstrap'
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
            <CarouselItem>
               <img className='d-block' src={A6} alt='auto foto' />
            </CarouselItem>
            <CarouselItem>
               <img className='d-block w-100' src={A8} />
            </CarouselItem>
            <CarouselItem>
               <img className='d-block w-100' src={BMW7} />
            </CarouselItem>
            <CarouselItem>
               <img className='d-block w-100' src={BMWX5} />
            </CarouselItem>
            <CarouselItem>
               <img className='d-block w-100' src={E39} />
            </CarouselItem>
            <CarouselItem>
               <img className='d-block w-100' src={Ferrari} />
            </CarouselItem>
            <CarouselItem>
               <img className='d-block w-100' src={Lamborghini} />
            </CarouselItem>
            <CarouselItem>
               <img className='d-block w-100' src={octavia} />
            </CarouselItem>
            <CarouselItem>
               <img className='d-block w-100' src={superb} />
            </CarouselItem>
            <CarouselItem>
               <img className='d-block w-100' src={X6} />
            </CarouselItem>
         </Carousel>g
      </>
   )
}

export default CarouselBox