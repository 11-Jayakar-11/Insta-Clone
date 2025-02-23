import React from 'react';
import Avatar from './Avatar';
import '../styles/carousel.css';
import { statusCarousel } from './data';

const Carousel = () => {
    const handleSlide =(direction) =>{
        const slider = document.getElementsByClassName('carousel-body')[0];
        if (direction === "left")
            slider.scrollBy(-400, 0);
        else
            slider.scrollBy(400,0);
    }
  return (
    <section className='check'>
    <div className='arrow-btn left-icon' onClick={()=>handleSlide('left')}>
        <img src='https://icon-library.com/images/side-arrow-icon/side-arrow-icon-28.jpg' alt="left-angle"/>
    </div>
    <div className='arrow-btn right-icon' onClick={()=>handleSlide('right')}>
        <img src='https://th.bing.com/th/id/OIP.cW0IU16RClDC5vssHDMX3wAAAA?rs=1&pid=ImgDetMain' alt="left-angle"/>
    </div>
    <div className='carousel-body'>
        {
            statusCarousel.map((item)=>{
                return <Avatar key={item} image={item}/>
            })
        }
    </div>
    </section>
  )
}

export default Carousel