import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import axios from 'axios';

const Slider = ({ children }) => {
  const [sliderData, setSliderData] = useState();
  const [currentSlider, setCurrentSlider] = useState(0);
  const [loading, setLoading] = useState(true);



  return (
    <>

      <section className='background h-screen '>
        {children}

        <div className='  md:flex justify-center  gap-20 w-[85%] mx-auto items-center pt-32'>
          <div className='appear-animation'>
            <img src="/banner-car.png" alt="" />
          </div>
          <div>
            <h1 className='text-5xl font-light text-white appear-animation2 '>Get your own set of 
            <span className='font-semibold '> Brand New Cars</span> Every Week..!</h1>
          </div>

        </div>



      </section>
    </>
  );
}

export default Slider;
