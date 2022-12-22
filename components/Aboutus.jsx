import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function Aboutus() {
  const cards = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dkqxnquga/image/upload/v1671727588/Rectangle_4_5_kyicvr.png",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dkqxnquga/image/upload/v1671727588/Rectangle_4_4_dvrd8t.png",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dkqxnquga/image/upload/v1671727588/Rectangle_4_3_y3rmxq.png",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dkqxnquga/image/upload/v1671727587/Rectangle_4_2_wibhzd.png",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dkqxnquga/image/upload/v1671727587/Rectangle_4_1_cfqy7e.jpg",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#0F4D67] ">
      <section className="bg-[url(https://res.cloudinary.com/dkqxnquga/image/upload/v1671727589/Vector_bfux1b.png)]">
        {/* header */}
        <section>
          <div className="fixed w-screen h-28 bg-[#1D2F41] flex items-center justify-items-start  space-x-48 ">
            <div className="relative ml-0 px-28 mt-4">
              <div className="w-full flex flex-col">
                <div className="bg-[#D9D9D9] flex h-16 w-80 space-x-1">
                  <div className="bg-[#1D2F41] mt-1 mb-1 ml-1 h-14 w-16">
                    <Image
                      src="https://res.cloudinary.com/dkqxnquga/image/upload/v1671727565/cosmo_logo_1_ob6qix.png"
                      alt="Logo"
                      width={90}
                      height={80}
                    />
                  </div>
                  <div className="text-black font-bold self-center text-3xl">
                    COSMOPOLITIAN
                  </div>
                </div>
                <div className="text-white font-Poppins font-semibold text-base flex items-stretch justify-center tracking-widest [word-spacing:2em]">
                  THE MULTI ETHNIC FEST
                </div>
              </div>
            </div>

            <div className="text-white flex space-x-16 font-bold text-lg font-Montserrat">
              <button className="hover:scale-105 duration-150 focus:border-b-4">
                GALLERY
              </button>
              <button className="hover:scale-105 duration-150 focus:border-b-4">
                EVENTS
              </button>
              <button className="hover:scale-105 duration-150 focus:border-b-4">
                TEAMS
              </button>
              <button className="hover:scale-105 duration-150 focus:border-b-4">
                MERCH
              </button>
              <button className="hover:border-b-4 focus:border-b-4">
                ABOUT US
              </button>
            </div>
          </div>
        </section>
        {/* hero */}

        <section className="max-w-7xl mx-auto  ">
          <div className="grid grid-cols-1 md:grid-cols-3 px-10 items-center py-64  ">
            <Image
              src="https://res.cloudinary.com/dkqxnquga/image/upload/v1671727587/image_9_wcdtmp.png"
              alt="About"
              width={400}
              height={400}
              className="col-span-1"
            />

            <div className="col-span-2 mx-12 ">
              <div className="px-4 py-2 flex justify-center text-xl text-black rounded-md bg-slate-200 w-36 font-semibold mb-8 tracking-widest">
                ABOUT
              </div>
              <div className="text-white text-justify">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia, facilis, aspernatur eos animi reiciendis obcaecati
                  dolores minus corporis quidem ipsum modi! Perspiciatis
                  recusandae vel error sapiente expedita dolor distinctio sint
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  cumque exercitationem sunt repellendus minus quasi distinctio
                  temporibus eum nostrum, emo recusandae quos dolorem aliquam
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia ab magni explicabo, molestiae natus vel delectus
                  perspiciatis! Vero corrupti temporibus ea amet quas explicabo,
                  in sed maxime similique iste dolorem! Lorem ipsum dolor sit
                  amet consectetur, adipisicing elit.lorem istinctio temporibae
                  quos do adipisicing elit. Tenetur, tempora? Consequuntur
                  veniam, ex natus enim nobis pariatur, illo eum obcaecati
                  aspernatur alias inventore quo praesentium velit possimus
                  sequi repellat corporis!
                </p>
              </div>
            </div>
          </div>

          <div className=" grid md:grid-cols-3 py-32 px-10 ">
            <div className=" col-span-2 flex-col mx-12">
              <div className="px-4 py-2 flex justify-center text-xl text-black rounded-md bg-slate-200 w-36 font-semibold mb-2 tracking-widest">
                SPONSER
              </div>
              <div className="text-white text-justify pt-2 pb-0 mb-0 ">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia, facilis, aspernatur eos animi reiciendis obcaecati
                  dolores minus corporis quidem ipsum modi! Perspiciatis
                  recusandae vel error sapiente expedita dolor distinctio sint
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  cumque exercitationem sunt repellendus minus quasi distinctio
                  temporibus eum nostrum, harum nesciunt reiciendis debitis
                  tempora, laudantium nemo recusandae quos dolorem aliquam
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia ab magni explicabo, molestiae natus vel delectus
                  perspiciatis! Vero corrupti temporibus ea amet quas explicabo,
                  in sed maxime similique iste dolorem! Lorem ipsum dolor sit
                  amet consectetur, adipisicing elit.lorem istinctio temporibae
                  quos dolorem aliquam Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Mollitia ab magni explicabo
                </p>
              </div>
              <div className="px-4 py-2 flex justify-center text-xl text-black rounded-md bg-slate-200 w-36 font-semibold mb-2 ml-auto tracking-widest">
                DETAILS
              </div>
            </div>
            <div className="w-[400px] h-[400px] col-span-1 bg-slate-200 rounded-xl">
              {" "}
            </div>
          </div>
        </section>
        {/* slider */}
        <section className="max-w-7xl mx-auto py-64">
          <div className="flex space-x-4 overflow-scroll scrollbar-hide scroll-smooth p-3 -ml-3  ">
            {cards.map(({ id, src }) => (
              <div
                key={id}
                className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out "
              >
                <div className="relative h-64 w-64">
                  <Image
                    src={src}
                    alt="Clothing"
                    layout="fill"
                    className="rounded-t-lg "
                  />
                </div>
                <div className="bg-white h-14 flex items-center justify-center rounded-b-lg ">
                  <h3 className="text-xl font-semibold text-black  ">
                    E-COMMERCE
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
