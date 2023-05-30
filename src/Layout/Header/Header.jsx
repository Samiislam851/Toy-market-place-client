import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthContextProvider';
import ActiveLink from '../../Component/ActiveLink/ActiveLink';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsFire } from 'react-icons/bs'


const Header = () => {

  const [langBtn, setLangBtn] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [imgDetails, setImgDetails] = useState(false)
  const { registerUser, user, logOut, loginUser, isLogged, setIsLogged } = useContext(AuthContext);

  //////////////////////
  const [open, setOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  const [onHomepage, setOnHomepage] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;
console.log('from header .. user : ',user);
  useEffect(() => {
    if (currentPath == '/') {
      setOnHomepage(true)
    } else {
      setOnHomepage(false);
    }
  }, []);



  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className={`relative ${onHomepage ? 'bg-transparent' : 'background'} `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center   border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <h1 className='h-8 w-auto sm:h-10 text-white text-3xl font-semibold flex gap-2 justify-center items-center text-yellow-100'><BsFire className='' /> Infinity Wheels</h1>

              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
              
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <ActiveLink
                to="/"
                className="text-base font-medium text-white hover:text-yellow-100"
              >
                Home
              </ActiveLink>

              <ActiveLink
                to="/toys"
                className="text-base font-medium text-white hover:text-yellow-100"
              >
                All Toys
              </ActiveLink>
              {user?  <ActiveLink
                to="/mytoys"
                className="text-base font-medium text-white hover:text-yellow-100"
              >
                My Toys
              </ActiveLink>:<></>}
            {user?<ActiveLink
                to="/addtoy"
                className="text-base font-medium text-white hover:text-yellow-100"
              >
                Add A Toy
              </ActiveLink> : <></>}
              
              <ActiveLink
                to="/blog"
                className="text-base font-medium text-white hover:text-yellow-100"
              >
                Blogs
              </ActiveLink>




            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">{!user?
              <>
                <Link
                  to='/login'
                  className="whitespace-nowrap text-base font-medium text-white hover:text-yellow-100"
                >
                  Sign in
                </Link>
                <Link
                  to='/register'
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </Link>
              </>
              :
              <>
              <img src={user.photoURL} className='rounded-full h-[50px] border border-1 shadow border-gray-300' title={user.displayName} alt="" />
              <button onClick={logOut} className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-400 bg-opacity-70 hover:bg-red-700'>Sign Out</button>
              </>}
            </div>
          </div>
        </div>
        {/*
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: ""
      To: ""
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  */}

        <div
          className={
            open
              ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-[99999999999] text-center  md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 footer-main divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>

                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="footer-main rounded-md p-2 inline-flex items-center justify-center text-blue-400 hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8 ">


                  <ActiveLink
                    to="/"
                    className="text-base font-medium text-white hover:text-yellow-100"
                  >
                    Home
                  </ActiveLink>

                  <ActiveLink
                    to="/toys"
                    className="text-base font-medium text-white hover:text-yellow-100"
                  >
                    All Toys
                  </ActiveLink>
                  {user? <ActiveLink
                    to="/mytoys"
                    className="text-base font-medium text-white hover:text-yellow-100"
                  >
                    My Toys
                  </ActiveLink>:<></>}
             {user?  <ActiveLink
                    to="/addtoy"
                    className="text-base font-medium text-white hover:text-yellow-100"
                  >
                    Add A Toy
                  </ActiveLink> :<></>   }    
                
                  <ActiveLink
                    to="/blog"
                    className="text-base font-medium text-white hover:text-yellow-100"
                  >
                    Blogs
                  </ActiveLink>

                  <div className=" md:flex items-center justify-end md:flex-1 lg:w-0">{!user?
              <>
                <Link
                  to='/login'
                  className="whitespace-nowrap text-base font-medium text-white hover:text-yellow-100"
                >
                  Sign in
                </Link>
                <Link
                  to='/register'
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </Link>
              </>
              :
              <>
              <img src={user.photoURL} className='rounded-full mx-auto mb-2 h-[50px] border border-1 shadow border-gray-300' title={user.displayName} alt="" />
              <button onClick={logOut} className='ml-8 -ms-1 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-400 bg-opacity-70 hover:bg-red-700'>Sign Out</button>
              </>}
            </div>


                </nav>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
