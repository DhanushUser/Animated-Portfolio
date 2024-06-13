import React from "react";
import "./skills.css";
// import skills_data from "../../assets/services_data";
import drawing from "../../assets/drawing.jpg";
import camera from "../../assets/camera.jpg";
import poster from "../../assets/poster.jpg";
import web from "../../assets/web.jpg";
import editing from "../../assets/editing.jpg";
import api from "../../assets/api.jpg";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div className="skills my-[100px]" id="skills">
      <div className="flex justify-center mb-10 ">
        <h1 className="text-3xl font-[600] mb-[50px]">My <span className="p-2 rounded ml-1">Skills</span></h1>
      </div>

      <div className="grid-card grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mx-2 ">
              <div className="skill-card flex flex-[1] flex-col bg-[#101720] mx-2 w-[280px] h-[200px] mb-[50px] rounded">
                <div className="skill-bg bg-black relative  flex justify-center items-center   h-[70%]">
                  <img  src={web} className="absolute rounded inset-0 w-[100%] h-[100%] bg-center bg-cover"/>
                  <h2 className="absolute">Web development</h2>
                </div>
                <div className="skill-link flex">
                <a href="#project"> <button className="btn mt-[15px] ml-5 bg-sky-400 px-[10px] py-[5px] rounded text-[14px]">
                    Explore
                  </button></a> 
                </div>
              </div>
              <div className="skill-card flex flex-[1] flex-col bg-[#101720] mx-2 w-[280px] h-[200px] mb-[50px] rounded">
                <div className="skill-bg bg-black relative  flex justify-center items-center   h-[70%]">
                  <img  src={drawing} className="absolute rounded inset-0 w-[100%] h-[100%] bg-center bg-cover"/>
                  <h2 className="absolute">Portrait Drawing</h2>
                </div>
                <div className="skill-link flex">
                <Link to={'/skills:drawing'}>  
                  <button className="btn mt-[15px] ml-5 bg-sky-400 px-[10px] py-[5px] rounded text-[14px]">
                      Explore
                  </button>
                </Link>
                </div>
              </div>
              <div className="skill-card flex flex-[1] flex-col bg-[#101720] mx-2 w-[280px] h-[200px] mb-[50px] rounded">
                <div className="skill-bg bg-black relative  flex justify-center items-center   h-[70%]">
                  <img  src={camera} className="absolute rounded inset-0 w-[100%] h-[100%] bg-center bg-cover"/>
                  <h2 className="absolute">Photographer</h2>
                </div>
                <div className="skill-link flex">
                <Link to={'/photography'} >  <button className="btn mt-[15px] ml-5 bg-sky-400 px-[10px] py-[5px] rounded text-[14px]">
                    Explore
                  </button></Link>
                </div>
              </div>
              <div className="skill-card flex flex-[1] flex-col bg-[#101720] mx-2 w-[280px] h-[200px] mb-[50px] rounded">
                <div className="skill-bg bg-black relative  flex justify-center items-center   h-[70%]">
                  <img  src={editing} className="absolute rounded inset-0 w-[100%] h-[100%] bg-center bg-cover"/>
                  <h2 className="absolute">Editor</h2>
                </div>
                <div className="skill-link flex">
                 <Link to={'/editing'}> <button className="btn mt-[15px] ml-5  px-[10px] py-[5px] rounded text-[14px]">
                    Explore
                  </button></Link>
                </div>
              </div>
              <div className="skill-card flex flex-[1] flex-col bg-[#101720] mx-2 w-[280px] h-[200px] mb-[50px] rounded">
                <div className="skill-bg bg-black relative  flex justify-center items-center   h-[70%]">
                  <img  src={poster} className="absolute rounded inset-0 w-[100%] h-[100%] bg-center bg-cover"/>
                  <h2 className="absolute">Poster Designing</h2>
                </div>
                <div className="skill-link flex">
                 <Link to={'/poster'}> <button className="btn mt-[15px] ml-5 bg-sky-400 px-[10px] py-[5px] rounded text-[14px]">
                    Explore
                  </button></Link>
                </div>
              </div>
              <div className="skill-card flex flex-[1] flex-col bg-[#101720] mx-2 w-[280px] h-[200px] mb-[50px] rounded">
                <div className="skill-bg bg-black relative  flex justify-center items-center   h-[70%]">
                  <img  src={api} className="absolute rounded inset-0 w-[100%] h-[100%] bg-center bg-cover"/>
                  <h2 className="absolute">Api & Json handling</h2>
                </div>
                <div className="skill-link flex">
                 <a href="#project"> <button className="btn mt-[15px] ml-5 bg-sky-400 px-[10px] py-[5px] rounded text-[14px]">
                    Explore
                  </button></a>
                </div>
              </div>
            </div>
      </div>
  );
};

export default Skills;
