import React, { useEffect, useState } from 'react';


import LoginWithGoogle from '../../Component/LoginWithSocial/LoginWithGoogle';
import LoginWithGithub from '../../Component/LoginWithSocial/LoginWithGithub';
import LoginWithFacebook from '../../Component/LoginWithSocial/LoginWithFacebook';
import LoginWithApple from '../../Component/LoginWithSocial/LoginWithApple';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import Header from '../../Layout/Header/Header';
const LoginPage = ({setTitle}) => {
  useEffect(() => {

    setTitle("Login")
}, []);
  const [message, setMessage] = useState("");
  const location = useLocation();
  const sendTo = location?.state?.pathname || '/';
  const navigate = useNavigate();
  console.log('Send To',sendTo);

  const auth = getAuth(app);
  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.email.value
    let password = e.target.password.value
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate(sendTo);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
        setMessage("Email or password doesn't match");
        // ..
      });
  }


  return (
    <>

      <section className=" w-full    flex justify-center items-center px-4 md:px-0 mt-12">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 text-2xl font-semibold items-center">
            <Link to="/login" className="border-b-4 border-[#4406CB] py-2">Login</Link>
            <Link to="/register" className="py-2 text-gray-500">Register Now</Link>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 ">
            <input
              type="email"
              name="email"
              id=""
              onChange={() => setMessage("")}
              placeholder="Enter Your Email"
              className="p-2 rounded-lg text-black  border"
            />
            <input
              type="password"
              name="password"
              id=""
              onChange={() => setMessage("")}
              placeholder="Enter Password"
              className="p-2 rounded-lg text-black border"
            />
            <p className='text-red-600'> {message}</p>
            <button className="btn btn-primary">Login</button>
            <a href="#">Forgot Password?</a>
          </form>
        <span> New to infinity Wheels? <Link className='text-blue-600' to='/register'>Create an Account!</Link></span>
          <div className="grid grid-cols-2 gap-4 text-black text-[10px] md:text-sm">
            {/* <LoginWithFacebook/>
   <LoginWithApple/> */}
            <LoginWithGoogle sendTo={sendTo} />
          </div>
        </div>
      </section>


    </>
  );
}

export default LoginPage;
