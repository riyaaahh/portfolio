import React from "react";
import Authentication from "./Authentication";
import { NavLink, Link, useNavigate } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Help from "./Help";
import Employees from "../assets/Employees.jpg";
import Lady from "../assets/Lady.jpg";
import Logo from "../assets/Logo.png";
import { auth } from "../firebase/firebase.js";
import { signOut } from "firebase/auth";
import Header from "./Header.jsx";
import HomeBG from '../assets/HomeBG.jpg';
import Edward from '../assets/Edward.png';
import Stats from "./Stats.jsx";
import Footer from "./Footer.jsx";
import HomeImg2 from '../assets/HomeImg2.jpg';
import HomeImg3 from '../assets/HomeImg3.jpg';
import HomeImg4 from '../assets/HomeImg4.png';
import HomeImg6 from '../assets/HomeImg6.jpg';
import HomeImg7 from '../assets/HomeImg7.png';
import HomeImg8 from '../assets/HomeImg8.png';
import Blogs from "./Blogs.jsx";


function Hoome() {
  return (
    <div className="App">
      <Header />
      <div 
        className="relative w-full h-screen bg-cover bg-center flex gap-16" 
        style={{ backgroundImage: `url(${HomeBG})` }}
      >
        <div className="relative flex flex-col text-white mb-36 ml-20 mt-28 p-20 rounded-lg">
          <div className="mt-10">
            <h1 className="text-6xl font-bold text-black">
              Upload. <span>Find.</span> <br /> <span>Elevate Your Career</span>
            </h1>
            <p className="text-base text-black font-semibold mt-4">
              Embark on a journey of possibilities, upload your skills with pride,
              <br />
              Navigate opportunities, where success will be your guide.
            </p>
            <Link to="/Authentication">
              <button className="mt-8 text-center border border-black text-black rounded-md py-2 px-10 font-medium bg-green-200 hover:scale-105 transition-transform duration-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="max-w-[400px] bg-green-200 my-10 border-black px-4
         border-4 mr-14 rounded-lg pt-10 hover:scale-105 transition-transform duration-300 shadow-6xl">
          <img src={Edward} alt="Edward" className="mt-3" />
        </div>
      </div>
      <Stats className="my-20"/>

      <div className="text-center text-5xl font-bold my-20  mb-8">
      <span className="font-extrabold">Your</span> Talent<br/>
      <span> Our <span className="font-extrabold">Portfolios!</span></span>
              <div className="flex flex-col  justify-center mt-4 mx-20">
                <div className="flex">
      <div className="max-w-sm rounded hover:scale-105 transition-transform duration-300 overflow-hidden shadow-2xl m-4">
        <img className="w-full max-w-[800px] " src={HomeImg2} alt="Card Image" />
      </div>
      <div className="max-w-sm rounded  hover:scale-105 transition-transform duration-300 overflow-hidden shadow-2xl m-4">
        <img className="w-full max-w-[800px]" src={HomeImg3} alt="Card Image" />
      </div>
      <div className="max-w-sm rounded  hover:scale-105 transition-transform duration-300 overflow-hidden shadow-2xl m-4">
        <img className="w-full max-w-[800px]" src={HomeImg8} alt="Card Image" />
      </div>
      </div>
      <div className="flex">
      <div className="max-w-sm rounded hover:scale-105 transition-transform duration-300 overflow-hidden shadow-2xl m-4">
        <img className="w-full  " src={HomeImg6} alt="Card Image" />
      </div>
      <div className="max-w-sm rounded hover:scale-105 transition-transform duration-300  overflow-hidden shadow-2xl m-4">
        <img className="w-full max-w-[800px]" src={HomeImg4} alt="Card Image" />
      </div>
      <div className="max-w-sm rounded hover:scale-105 transition-transform duration-300  overflow-hidden shadow-2xl m-4">
        <img className="w-full max-w-[800px]" src={HomeImg7} alt="Card Image" />
      </div>
      </div>
     
    </div>
      </div>
      <Blogs/>

      <Footer/>

    </div>
  );
}

export default Hoome;
