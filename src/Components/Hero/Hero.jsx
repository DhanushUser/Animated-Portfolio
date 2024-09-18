import React, { useEffect, useState } from "react";
import "./hero.css";
import About from "../About/About";
import Project from "../Projects/Project";
import logo from "../../assets/profile-logo.png";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Dresume from '../../assets/DhanushResume.pdf'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toastify-custom.css'; // Import custom CSS
import { Link } from "react-router-dom";
import Intern from "../Internship/Intern";

const Hero = () => {

  const [sticky,setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  

  const notify = () => {
    toast.success('Resume downloaded', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  return (
    <div className="hero-bg" id="home">
      <div className="hero lg:pt-[15vh] md:pt-[15vh] sm:pt-0 ld:flex md:flex sm:block  justify-center items-center lg:mx-20 md:mx-14 sm:mx-10 mb-[15rem]">
        <div className="hero-left lg:w-1/2 md:w-1/2 sm:w-full mx-5 ">
          <img
            className=" object-center bg-center shadow-lg"
            width={300}
            src={logo}
            alt=""
          />
        </div>
        <div className="hero-right flex-col  lg:w-1/2 md:w-1/2 sm:w-full ">
          <h1 className="text-5xl mb-3">I'm Dhanush</h1>
          <h3 className="text-2xl mb-3">Frontend Developer</h3>
          <p>Strong foundation in ReactJs and Javascript !</p>

          <div className="resume mt-[20px]">
            <a onClick={notify} href={Dresume} download='Dhanush_resume'>
              <button className="btn ">Resume</button>
            </a>
            <a href="#contact"><button className="btn mx-2">Contact</button></a>
          </div>

          <div className="social-icons mx-2 cursor-pointer mt-[30px] text-3xl flex gap-[30px]">
            <a href="https://www.linkedin.com/in/dhanush-s-7ba230277/" target="_blank"><i className='active bx bxl-linkedin'></i></a>
            <a href="https://github.com/DhanushUser" target="_blank"><i className='bx bxl-github'></i></a>
          </div>
        </div>

        <div className={sticky ? "nav-home" : "opacity"}>
            <a href="#home"><i class='bx bx-chevrons-up'></i></a>
        </div>
      </div>
      <ToastContainer theme="dark"/>
      <About />
      <Project />
      {/* <Intern /> */}
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Hero;
