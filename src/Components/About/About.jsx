import React from "react";
import "./about.css";
import About_l from "../../assets/about-.png";

const About = () => {
  return (
    <div className="about my-[100px] mx-3" id="about">
      <div className="flex justify-center mb-10 ">
        <h1 className="text-4xl font-[600] mb-[50px]">About</h1>
      </div>
      <div className="flex">
        <div className="about-left w-1/2 mx-3">
          <img
            className=" object-cover bg-center ml-[10vw]"
            src={About_l}
            alt=""
          />
        </div>
        <div className="about-right lg:w-1/2 md:w-1/2 sm:w-full mx-3 ">
          <p className="mb-10 ">
            Dedicated and skilled Frontend Developer with a passion for creating
            engaging and user-friendly web applications. Proficient in a wide
            range of frontend technologies including HTML, CSS, JavaScript, and
            frameworks such as React.js. Experienced in designing responsive and
            visually appealing interfaces while ensuring cross-browser
            compatibility and accessibility standards. Strong background in
            graphic design and artistic skills, coupled with expertise in UI/UX
            principles. Capable of effectively collaborating with
            cross-functional teams to deliver high-quality software solutions.
            Committed to continuous learning and staying updated with the latest
            trends and technologies in frontend development.
          </p>

          <div className="skill">
            <h3>Html & CSS </h3>
            <hr style={{ width: "90%" }} />
            <h3>Javascript </h3>
            <hr style={{ width: "80%" }} />
            <h3>Reactjs </h3>
            <hr style={{ width: "85%" }} />
            <h3>Tailwind CSS </h3>
            <hr style={{ width: "75%" }} />
            <h3>Bootstrap </h3>
            <hr style={{ width: "70%" }} />
            <h3>Adobe Photoshop </h3>
            <hr style={{ width: "95%" }} />
            <h3>Adobe Illustrator </h3>
            <hr style={{ width: "90%" }} />
            <h3>Poster designing </h3>
            <hr style={{ width: "95%" }} />
          </div>
        </div>
      </div>

      <div className="total-projects my-[150px]">
        <hr />
        <div className="count mx-5 text-center ">
          <h2>10+</h2>
          <p>Projects completed</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
