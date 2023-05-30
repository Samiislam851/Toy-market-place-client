import React from 'react';

const GalleryCard = ({img}) => {
    return (
        <>
 {/* <div className='p-12 bg-gray-100 hover:bg-blue-500 hover:bg-opacity-30  to-pink-500 transition-all ease-in-out transition  hover:scale-[1.08] ' >
  
  </div> */}
  <img
      className="w-full md:w-[500px] h-full transition-all hover:rounded-none  ease-in-out transition blur-[1px] opacity-90 hover:opacity-100  hover:blur-0 "
      
      src={img}
      alt=""
    />

           
        </>
    );
}

export default GalleryCard;
