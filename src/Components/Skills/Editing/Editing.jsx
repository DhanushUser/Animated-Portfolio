import React, { useState } from "react";
import "./edit.css";
import video_1 from '../../../assets/Video/maxwell.mp4';
import two from '../../../assets/Video/two.mp4';
import Edit_1 from '../../../assets/edit-1.jpg';
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black",borderRadius:'50%', }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black",borderRadius:'50%', }}
      onClick={onClick}
    />
  );
}

const Editing = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [isVideoDisplayed, setIsVideoDisplayed] = useState(false);

  const handleVideoDisplay = () => {
    setIsVideoDisplayed(true);
  };

  const handleCloseVideo = () => {
    setIsVideoDisplayed(false);
  };

  return (
    <div className="editing">
      <div className="flex justify-center items-center mt-[18vh]">
        <h2 className="text-2xl mb-[100px] font-[500]">
          Video <span className="font-[500] p-1 rounded">Editing</span>
        </h2>
      </div>

      <div className="editing-content mx-[50px] lg:flex md:flex sm:block">
        <div className="sample-video">
          {!isVideoDisplayed ? (
            <button onClick={handleVideoDisplay} className="display-button">
              Reference
            </button>
          ) : (
            <div className="video-container">
                    <video
                      className="set-display"
                      controls
                      autoPlay
                      src={video_1}
                    ></video>
              <button onClick={handleCloseVideo} className="close-button">
                Close Video
              </button>
            </div>
          )}
        </div>
        <div className="para lg:w-[40%] md:w-[50%] sm:w-[80%] text-md font-[300]">
          <p>
            As a seasoned video editor, I thrive on transforming concepts into
            captivating visual narratives. Armed with a keen eye for detail and a
            passion for storytelling, I bring a unique blend of creativity and
            technical prowess to every project. In instagram , I've been maintaining <label className="bg-orange-300 text-black p-1 rounded">8k</label>  above followers. You can check it out below.
          </p>

          <div className="r-link mt-5">
            <a className="cursor-pointer"  target="_blank" rel="noopener noreferrer">
            <i className='bx bxs-chevrons-left'></i> Reference video
            </a>
            <a
              href="https://www.instagram.com/d7creationz/?igsh=aHRxbTM2cHdjZjdl"
              target="_blank"
              rel="noopener noreferrer"
              className="insta"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editing;
