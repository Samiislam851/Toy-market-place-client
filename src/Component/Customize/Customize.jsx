import React from 'react';
import { VscSettings } from 'react-icons/vsc';
import {FiSettings } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Customize = () => {
    AOS.init();
    return (
        <div className='relative    flex mt-20  h-[500px]'>
            <div 

                    >
            <h1 className='lg:text-[10rem] md:ps-0 pt-7  text-blue-600 opacity-[0.1] blur-[0px] text-[2px] invisible md:visible font-bold  text-center  border text-center ms-40  '>Lamborghini</h1></div>
            <div className='md:flex w-[100%] px-10  justify-start gap-8  absolute bottom-20 '>
                <div className='ps-0 md:ps-10'>
                <div data-aos="slide-right"
                        data-aos-delay="500"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center"

                    >
                    <h1 className='text-3xl text-gray-700 font-semibold text-center md:text-start flex '>Configurator <FiSettings className='pt-3 h-8'
                    />
                    <FiSettings className='pt-0 h-6 ms-[-10px]'
                    />
                    </h1>
                    </div>
                    <div data-aos="slide-right"
                        data-aos-delay="50"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center"

                    >
                        <h1 className='md:text-7xl text-6xl  text-gray-900 font-bold border-t-2 mt-1 border-gray-500'>Customize Your Car </h1>
                    </div>
                    <div data-aos="fade-in"
                        data-aos-delay="1200"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center"
                    >
                    <button className='border-gray-200 rounded-md hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 hover:text-white hover:border-transparent transition-all ease-in-out   text-gray-500 border-2  text-xl font-semibold px-3 w-fit mx-auto md:mx-1 pt-1 mb-5 mt-10 flex text-center  md:text-start'>Customize <VscSettings className=' h-8 ms-1' /></button>
                    </div>
                </div>
                <div className='basis-[60%]'>
                    <div data-aos="fade-in"
                        data-aos-delay="50"
                        data-aos-duration="800"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center"
                    

                    >
                        <img className='w-[100%]' src="/customize-banner.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customize;