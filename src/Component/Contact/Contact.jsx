import React from 'react';

const Contact = () => {
    return (
        <div className=''>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
  <div className="md:w-1/2">
    <img src="https://cdn.dribbble.com/users/3960415/screenshots/8995365/work.gif" className="img-fluid shadow-sm" alt="" />
  </div>
  <div className="w-[90%] md:w-[60%]  p-3">
    <h1 className="md:text-7xl text-4xl text-gray-800 font-semibold text-left">Contact Us</h1>
    <p className='text-gray-500 text-lg md:ps-3 py-4'>Contact Us for any inquiries, feedback, or business opportunities related to Infinity wheels. We are here to assist you with any questions you may have. Whether you need assistance with placing an order, have a suggestion to improve our services, or want to explore collaboration opportunities, our dedicated team is ready to help. Feel free to reach out to us and our friendly staff will respond to your message promptly. We value your input and look forward to hearing from you!.</p>
    <button className="px-3 md:ms-3 py-2 bg-gradient-to-r from-blue-900 via-blue-600 to-purple-700 text-white rounded-md  font-semibold">Contact now</button>
  </div>
</div>

        </div>
    );
};

export default Contact;