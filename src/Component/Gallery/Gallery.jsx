import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GalleryCard from './GalleryCard';
import Spinner from '../Spinner/Spinner';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Gallery = () => {
  AOS.init();
  const [loading, setLoading] = useState(true);
  const [galleryData, setGalleryData] = useState(null);
  useEffect(() => {
    if (loading) {
      axios.get("/gallery")
        .then(response => {
          setGalleryData(response.data);
          setLoading(false)
        })
    }
  }, []);
  return (
    <>
      <section className='space-y-8 mt-20 w-4/5 mx-auto'>
      <div data-aos="slide-left"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top"
   >

      <h1 className='text-5xl md:text-7xl text-gray-700 font-semibold text-center md:font-normal    md:text-start pb-1'>Gallery</h1>
      </div>
       

        <div className='flex justify-center'> 
          <div className='w-[98%]  md:border-s-4 border-gray-700 py-1 ps-1 md:ps-4 text-center text-gray-500 md:text-start'>
          <div data-aos="fade-in"
          data-aos-delay="1000"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top"
          
          > "Discover the captivating world of Infinity Wheels through our stunning gallery. Experience vibrant colors, intricate details, and endless play possibilities."</div>
           

          </div>
        </div>
        <div data-aos="fade-in" 
                 
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"> 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:px-[10px]">
          {loading ? <>
            <Spinner />
          </> : <>
            {galleryData.map(e => {
              return <div key={e._id}>
             
<div ></div>
                <GalleryCard img={e.img} />
         

              </div>
            })}
          </>}
        </div></div>
      </section>

    </>
  );
}

export default Gallery;
