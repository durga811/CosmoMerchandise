import React from "react";
import View from "./View";


const Merch = () => {
  return (
    <section>
     
      <div className="   w-full min-h-screen bg-yellow-300 bg-[#670f2f] p-5 lg:p-10 relative">
      <img src="https://res.cloudinary.com/durga811/image/upload/v1671704844/cosmo%20assets/cosmo_logo_anymzn.png" alt="" className="z-30 w-auto block center mx-auto "  />
        <div className="w-full max-w-6xl rounded mt-16 bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative border-4 border-yellow-200">
                {/* <img
                  src="https://i.ibb.co/bRCpvXG/Whats-App-Image-2023-01-07-at-12-30-23-PM.jpg"
                  className="w-full relative z-10 p-4"
                  alt=""
                /> */}
                <View/>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h1 className="font-bold uppercase text-2xl mb-5">
                  Men Ragged <br />
                  Waterproof Jacket
                </h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
                  Eos, voluptatum dolorum! Laborum blanditiis consequatur...{" "}
                 
                </p>
              </div>
       <div>
        <img src="https://res.cloudinary.com/durga811/image/upload/v1673126144/cosmo%20assets/Cosmo_Size_Chart_doyoht.jpg" alt=""  />
       </div>
              
              <div className="mt-8">
                <div className="inline-block align-bottom mr-5">
                  <span className="text-2xl leading-none align-baseline">
                    Rs
                  </span>
                  <span className="font-bold text-5xl leading-none align-baseline">
                    499
                  </span>
                </div>
                <div className="inline-block align-bottom">
                <a href="https://docs.google.com/forms/d/1rc6S7k0Nnj-aPPVmFjWRDgkk3mbmGIv-M73MRkurmY0/edit">
                  <button  className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                    <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Merch;
