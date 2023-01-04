import React, { useState } from "react";
const Carousel = () => {
  const [slide1, setSlide1] = useState({
    boxShadow:
      "0 13px 26px rgba(0, 0, 0.3, 0.5), 0 12px 6px rgba(0, 0, 0.3, 0.5)",
    transform: "translate3d(0%, 0, 0)",
  });
  const [slide2, setSlide2] = useState({
    boxShadow:
      "0 10px 10px rgba(0, 0, 0.3, 0.5), 0 2px 2px rgba(0, 0, 0.3, 0.5)",
    transform: "translate3d(15%, 0, -100px)",
  });
  const [slide3, setSlide3] = useState({
    boxShadow: "0 5px 7px rgba(0, 0, 0.3, 0.5)",
    transform: "translate3d(30%, 0, -200px)",
  });
  const [slide4, setSlide4] = useState({
    boxShadow: "0 2px 4px rgba(0, 0, 0.3, 0.5)",
    transform: "translate3d(45%, 0, -300px)",
  });
  const [slide5, setSlide5] = useState({
    boxShadow: "0 10px 10px rgba(0, 0, 0.3, 0.5)",
    transform: "translate3d(-15%, 0, -100px)",
  });
  const [slide6, setSlide6] = useState({
    boxShadow: "0 5px 7px rgba(0, 0, 0.3, 0.5)",
    transform: "translate3d(-30%, 0, -200px)",
  });
  const [slide7, setSlide7] = useState({
    boxShadow: "0 2px 4px rgba(0, 0, 0.3, 0.5)",
    transform: "translate3d(-45%, 0, -300px)",
  });
  const image = {image1:"https://i.ibb.co/hMZ4yGx/1.jpg", image2: "https://i.ibb.co/zRjptJJ/2.jpg", image3:"https://i.ibb.co/KrnZ84R/7.jpg", image4:"https://i.ibb.co/Rcy80D5/3.jpg", image5:"https://i.ibb.co/9V1JR4L/4.jpg", image6:"https://i.ibb.co/yXZDFsy/5.jpg", image7:"https://i.ibb.co/KrnZ84R/7.jpg"}
  const array = [
    { img: image.image1, slide: slide1 },
    { img: image.image2, slide: slide2 },
    { img: image.image3, slide: slide3 },
    { img: image.image4, slide: slide4 },
    { img: image.image5, slide: slide5 },
    { img: image.image6, slide: slide6 },
    { img: image.image7, slide: slide7 },
  ];
  const style = {
    perspective: "1400px",
    transformStyle: "preserve-3d",
  };

  const handleCheck = (i) => {
    if (i == 1) {
      setSlide1({
        boxShadow:
          "0 13px 26px rgba(0, 0, 0.3, 0.5), 0 12px 6px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(0%, 0, 0)",
      });
      setSlide2({
        boxShadow:
          "0 10px 10px rgba(0, 0, 0.3, 0.5), 0 2px 2px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(15%, 0, -100px)",
      });
      setSlide3({
        boxShadow: "0 5px 7px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(30%, 0, -200px)",
      });
      setSlide4({
        boxShadow: "0 2px 4px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(45%, 0, -300px)",
      });
      setSlide5({
        boxShadow: "0 10px 10px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(-15%, 0, -100px)",
      });
      setSlide6({
        boxShadow: "0 5px 7px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(-30%, 0, -200px)",
      });
      setSlide7({
        boxShadow: "0 2px 4px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(-45%, 0, -300px)",
      });
    } else if (i == 2) {
      setSlide2({
        boxShadow:
          "0 13px 26px rgba(0, 0, 0.3, 0.5), 0 12px 6px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(0%, 0, 0)",
      });
      setSlide3({
        boxShadow:
          "0 10px 10px rgba(0, 0, 0.3, 0.5), 0 2px 2px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(15%, 0, -100px)",
      });
      setSlide4({
        boxShadow: "0 5px 7px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(30%, 0, -200px)",
      });
      setSlide5({
        boxShadow: "0 2px 4px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(45%, 0, -300px)",
      });
      setSlide6({
        boxShadow: "0 10px 10px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(-15%, 0, -100px)",
      });
      setSlide7({
        boxShadow: "0 5px 7px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(-30%, 0, -200px)",
      });
      setSlide1({
        boxShadow: "0 2px 4px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(-45%, 0, -300px)",
      });
    } else if (i == 3) {
      setSlide3({
        boxShadow:
          "0 13px 26px rgba(0, 0, 0.3, 0.5), 0 12px 6px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(0%, 0, 0)",
      });
      setSlide4({
        boxShadow:
          "0 10px 10px rgba(0, 0, 0.3, 0.5), 0 2px 2px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(15%, 0, -100px)",
      });
      setSlide5({
        boxShadow: "0 5px 7px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(30%, 0, -200px)",
      });
      setSlide6({
        boxShadow: "0 2px 4px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(45%, 0, -300px)",
      });
      setSlide7({
        boxShadow: "0 10px 10px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(-15%, 0, -100px)",
      });
      setSlide1({
        boxShadow: "0 5px 7px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(-30%, 0, -200px)",
      });
      setSlide2({
        boxShadow: "0 2px 4px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(-45%, 0, -300px)",
      });
    } else if (i == 4) {
      setSlide4({
        boxShadow:
          "0 13px 26px rgba(0, 0, 0.3, 0.5), 0 12px 6px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(0%, 0, 0)",
      });
      setSlide5({
        boxShadow:
          "0 10px 10px rgba(0, 0, 0.3, 0.5), 0 2px 2px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(15%, 0, -100px)",
      });
      setSlide6({
        boxShadow: "0 5px 7px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(30%, 0, -200px)",
      });
      setSlide7({
        boxShadow: "0 2px 4px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(45%, 0, -300px)",
      });
      setSlide1({
        boxShadow: "0 10px 10px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(-15%, 0, -100px)",
      });
      setSlide2({
        boxShadow: "0 5px 7px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(-30%, 0, -200px)",
      });
      setSlide3({
        boxShadow: "0 2px 4px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(-45%, 0, -300px)",
      });
    } else if (i == 5) {
      setSlide5({
        boxShadow:
          "0 13px 26px rgba(0, 0, 0.3, 0.5), 0 12px 6px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(0%, 0, 0)",
      });
      setSlide6({
        boxShadow:
          "0 10px 10px rgba(0, 0, 0.3, 0.5), 0 2px 2px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(15%, 0, -100px)",
      });
      setSlide7({
        boxShadow: "0 5px 7px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(30%, 0, -200px)",
      });
      setSlide1({
        boxShadow: "0 2px 4px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(45%, 0, -300px)",
      });
      setSlide2({
        boxShadow: "0 10px 10px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(-15%, 0, -100px)",
      });
      setSlide3({
        boxShadow: "0 5px 7px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(-30%, 0, -200px)",
      });
      setSlide4({
        boxShadow: "0 2px 4px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(-45%, 0, -300px)",
      });
    } else if (i == 6) {
      setSlide6({
        boxShadow:
          "0 13px 26px rgba(0, 0, 0.3, 0.5), 0 12px 6px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(0%, 0, 0)",
      });
      setSlide7({
        boxShadow:
          "0 10px 10px rgba(0, 0, 0.3, 0.5), 0 2px 2px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(15%, 0, -100px)",
      });
      setSlide1({
        boxShadow: "0 5px 7px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(30%, 0, -200px)",
      });
      setSlide2({
        boxShadow: "0 2px 4px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(45%, 0, -300px)",
      });
      setSlide3({
        boxShadow: "0 10px 10px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(-15%, 0, -100px)",
      });
      setSlide4({
        boxShadow: "0 5px 7px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(-30%, 0, -200px)",
      });
      setSlide5({
        boxShadow: "0 2px 4px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(-45%, 0, -300px)",
      });
    } else if (i == 7) {
      setSlide7({
        boxShadow:
          "0 13px 26px rgba(0, 0, 0.3, 0.5), 0 12px 6px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(0%, 0, 0)",
      });
      setSlide1({
        boxShadow:
          "0 10px 10px rgba(0, 0, 0.3, 0.5), 0 2px 2px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(15%, 0, -100px)",
      });
      setSlide2({
        boxShadow: "0 5px 7px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(30%, 0, -200px)",
      });
      setSlide3({
        boxShadow: "0 2px 4px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(45%, 0, -300px)",
      });
      setSlide4({
        boxShadow: "0 10px 10px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(-15%, 0, -100px)",
      });
      setSlide5({
        boxShadow: "0 5px 7px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(-30%, 0, -200px)",
      });
      setSlide6({
        boxShadow: "0 2px 4px rgba(0, 0, 0.3, 0.5)",
        transform: "translate3d(-45%, 0, -300px)",
      });
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <section id="slider" className="relative w-[50%] h-[30vw]" style={style}>
        {array.map((value, index) => {
          return (
            <>
              <input
                type="radio"
                name="slide"
                id={`s${index + 1}`}
                className="slide relative top-[104%] left-[50%] mt-0 sm:mr-[15px] mr-[5px] mb-0 ml-0 sm:translate-x-[-114px] translate-x-[-55px] z-10 opacity-2 "
                onChange={() => {
                  handleCheck(index + 1);
                }}
              />
              <label
                id={`slide${index + 1}`}
                for={`s${index + 1}`}
                className="absolute top-0 left-0 w-full h-full rounded-[15px] transition-all duration-700"
                style={value.slide}
              >
                <img
                  className="w-full h-full rounded-[15px]"
                  src={value.img}
                  alt=""
                />
              </label>
            </>
          );
        })}
      </section>
    </div>
  );
};

export default Carousel;
