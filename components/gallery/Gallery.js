import React, { useState } from "react";
import Modal from "./Modal";
import { FaPlus } from "react-icons/fa";
const Gallery = () => {
  const [modal, setModal] = useState(false);
  const [tempModal, setTempModal] = useState("");
  const [idModal, setIdModal] = useState(0);
  const [bigScren, setBigScreen] = useState(false);
  const bigData = [
    { id: 1, text: "bg-red-800" },
    { id: 2, text: "bg-pink-800" },
    { id: 3, text: "bg-orange-800" },
    { id: 4, text: "bg-cyan-800" },
    { id: 5, text: "bg-green-800" },
    { id: 6, text: "bg-yellow-800" },
    { id: 7, text: "bg-blue-800" },
    { id: 8, text: "bg-white" },
    { id: 9, text: "bg-red-800" },
    { id: 10, text: "bg-pink-800" },
    { id: 11, text: "bg-orange-800" },
    { id: 12, text: "bg-cyan-800" },
    { id: 13, text: "bg-green-800" },
    { id: 14, text: "bg-yellow-800" },
    { id: 15, text: "bg-blue-800" },
    { id: 16, text: "bg-white" },
  ];

  const handleChange3 = () => {
    setBigScreen(true);
    console.log("big screen");
  };
  const next = () => {
    if (idModal === bigData.length-1) {
      setIdModal(idModal);
      return;
    }
    let id = idModal + 1;
    bigData.map((value, index) => {
      if (index === id) {
        setTempModal(value.text);
      }
    });
    setIdModal(id);
    console.log("id");
  };
  const previous = () => {
    if (idModal === 0) {
      setIdModal(idModal);
      return;
    }
    let id = idModal - 1;
    bigData.map((value, index) => {
      if (index === id) {
        setTempModal(value.text);
      }
    });
    setIdModal(id);
  };
  const handleChange1 = () => {
    setModal(false);
  };
  const handleChange2 = (e) => {
    bigData.map((value, index) => {
      if (index === e) {
        setTempModal(value.text);
        setIdModal(e);
      }
    });
    setModal(true);
  };

  return (
    <div className="flex flex-col items-center p-4 w-screen md:min-h-screen max-w-full bg-black gap-4 justify-around">
      <button
        className="font-inter w-40 flex justify-center items-center rounded-md font-semibold h-10 bg-white z-50"
        onClick={handleChange1}
      >
        GALLERY
      </button>
      {bigScren && (
        <div
          className={`flex items-center justify-center flex-wrap lg:w-full `}
        >
          {modal && <Modal color={tempModal} />}
          {!modal &&
            bigData.map((value, index) => {
              return (
                <>
                  <div
                    className={`flex justify-center items-center ${value.text} w-[13rem] h-[14rem] rounded-[50px] m-4 transition duration-300 hover:scale-110 transform`}
                    key={index}
                    onClick={() => {
                      handleChange2(index);
                    }}
                  ></div>
                </>
              );
            })}
        </div>
      )}
      {!bigScren && (
        <div
          className={`flex items-center justify-center flex-wrap lg:w-[60rem] lg:h-[32rem]`}
        >
          {modal && <Modal color={tempModal} />}
          {!modal &&
            bigData.map((value, index) => {
              if (index === 7) {
                return (
                  <>
                    <div
                      className={`flex justify-center items-center ${value.text} w-[13rem] h-[14rem] rounded-[50px] m-4`}
                      key={index}
                      onClick={() => {
                        handleChange3();
                      }}
                    >
                      <FaPlus className="text-4xl" />
                    </div>
                  </>
                );
              } else if (index < 7) {
                return (
                  <>
                    <div
                      className={`flex justify-center items-center ${value.text} w-[13rem] h-[14rem] rounded-[50px] m-4 transition duration-300 hover:scale-110 transform`}
                      key={index}
                      onClick={() => {
                        handleChange2(index);
                      }}
                    >
                      Card
                    </div>
                  </>
                );
              }
            })}
        </div>
      )}
      {modal && (
        <div className=" flex justify-evenly items-center w-full z-50">
          <button onClick={previous} className={`w-20 bg-white `}>
            back
          </button>
          <button onClick={next} className="w-20 bg-white">
            next
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
