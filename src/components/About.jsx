import React from 'react';
import Employees from '../assets/Employees.jpg'
import { NavLink, Link } from 'react-router-dom';
import { FaEye, FaHandsHelping, FaRocket } from 'react-icons/fa';


import Logo from '../assets/Logo.png'
import Home from './Home';
import Aboutus from '../assets/Aboutus.jpg'
import Aboutus2 from '../assets/Aboutus2.jpg'
import Aboutus3 from '../assets/Aboutus3.jpg'
import Aboutus5 from '../assets/Aboutus5.jpg'
import Marcusthree from '../assets/Marcusthree.png'

import Edward from '../assets/Edward.png'
import Mushthaq from '../assets/Mushthaq.png'
import NickJonastwo from '../assets/NickJonastwo.png'
import Jeremiahtwo from '../assets/Jeremiahtwo.png'
import Christwo from '../assets/Christwo.png'
import Adamtwo from '../assets/Adamtwo.png'
import Annathree from '../assets/Annathree.png'
import NickJonas from '../assets/NickJonas.png'
import Navbar from './Navbar';

function About() {
    return(
<div className='bg-white h-screen w-screen'>
<Navbar/>
        <div className='bg-white w-screen h-screen mt-16'>
            <div className=' m-4'>
              <div className='flex items-center justify-between mx-10 gap-20 m-4'>
                <div>
            <h1 className='text-neutral-950  rounded-lg  text-5xl font-bold text-center' style={{ textShadow: '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff' }}>
<span  className='text-nowrap'>We Provide Exceptional</span><br/> Quality Services</h1>
</div>
<div className='font-semibold'> We offers a seamless and user-friendly experience,<br/>
   ensuring that your content is displayed beautifully and professionally.
   </div>
</div>
    <div className='rounded-lg border-2 border-black m-4 mt-8 '>
    <img src={Employees} className=' rounded-lg' alt='Employees' />
    </div>
    </div>
    <div className='flex border-y-black border-2 justify-between  items-center'>
      <div className=' ml-56 items-center text-center  '>
      <div className='text-xl font-bold'>Client Satisfaction</div>

        <div className='text-green-800 font-bold text-6xl'>15k+</div>
      </div>
      <div className='text-center' >
      <div className='text-xl font-bold'>Portfolio Uploaded</div>

        <div className='text-green-800 font-bold text-6xl'>25k+</div>
      </div>  
      <div className='text-center' >
      <div className='text-xl font-bold'></div>

        <div className='text-green-800 font-bold text-6xl'>25k+</div>
      </div> 
    </div>

    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6 border-2 border-black bg-green-100 flex flex-col justify-center items-center">
          <FaEye className="text-4xl text-blue-500 mb-4" />
          <h2 className="text-xl font-bold mb-2">Our Vision</h2>
          <p className="text-gray-700 text-center">At Portfoe, we envision a world where every individual finds meaningful employment that aligns with their skills and aspirations.</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border-2 border-black bg-green-100 flex flex-col justify-center items-center">
          <FaHandsHelping className="text-4xl text-green-500 mb-4" />
          <h2 className="text-xl font-bold mb-2">Our Values</h2>
          <p className="text-gray-700 text-center">Our values are centered around transparency, inclusivity, and innovation, ensuring fairness and equal opportunity for all job seekers.</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border-2 border-black bg-green-100 flex flex-col justify-center items-center">
          <FaRocket className="text-4xl text-purple-500 mb-4" />
          <h2 className="text-xl font-bold mb-2">Why Choose Us?</h2>
          <p className="text-gray-700 text-center">Portfoe stands out for its commitment to excellence in service delivery, leveraging cutting-edge technology to optimize the job search experience.</p>
        </div>
      </div>
    </div>



  


   
   
</div>
    </div>


    )};
export default About;
