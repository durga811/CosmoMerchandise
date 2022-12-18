const Modal = ({ color }) => {
  return (
    <div className="absolute inset-0 bottom-0 z-40">
      <div className="flex md:h-screen h-full bg-black justify-center items-center ">
        <div
          className={`flex justify-center items-center ${color} w-[80%] h-[60%] md:w-[60%] md:h-[50%] rounded-[50px] m-4 transition duration-500 `}
          
        ></div>
      </div>
    </div>
  );
};

export default Modal;
