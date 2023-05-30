import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
document.title = 'error'
  const navigate = useNavigate();
  const handleGoback = () => {
    navigate('/');
  }

  return (
    <>
      <div className="flex items-center justify-center mx-auto w-[75%] h-screen bg-white ">
        <div className="flex flex-col">
          <div className="flex flex-col items-center">
            <img src="/404.gif" className='w-[50%]' alt="" />
            <button onClick={handleGoback} className='px-3 py-1 rounded bg-gradient-to-r  from-blue-700 via-purple-600 to-pink-700 text-white text-xl'>Back to Home</button>
            <div className="font-semibold  md:text-5xl mt-10">
              This page does not exist
            </div>
            <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
              The page you are looking for could not be found.
            </div>

          </div>

        </div>
      </div>


    </>
  );
}

export default ErrorPage;
