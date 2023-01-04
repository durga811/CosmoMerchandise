import React from "react";

export const TeamImage = ({ link }) => {
    return (
        <>
            <div className="image transition-all duration-500 group flex relative w-[42.75vw] h-[29.25vw]">
                <img
                    className="w-full h-full transition duration-1000 ease-in-out absolute group-hover:blur-[0.12vw]"
                    id="ourteamimage"
                    src={link}
                    alt="img2"
                    border="0"
                />
                <div className="absolute px-[3.27%] py-[5.45%] hidden group-hover:flex flex-col left-0 bottom-0">
                    <p className="font-bold text-[1.437vw] transition-all duration-1000 ease-in-out leading-[1.67vw] capitalize text-transparent group-hover:text-white">
                        ADAM WARLOCK
                    </p>
                    <p className="font-normal text-[0.838vw] text-transparent group-hover:text-[#FF9900] transition-all duration-1000 leading-[1.137vw] capitalize">
                        25/03/2022
                    </p>
                </div>
                <div className="absolute hidden transition duration-500 group-hover:flex gap-[1.4vw] right-0 bottom-0 p-[2.87vw] ">
                    <img
                        className="transition duration-500 h-[2.1557vw] w-[2.1557vw] cursor-pointer"
                        src="https://i.ibb.co/F5sgH48/LinkedIN.png"
                        alt="LinkedIN"
                        border="0"
                    />
                    <img
                        className="transition duration-500 h-[2.1557vw] w-[2.1557vw] cursor-pointer"
                        src="https://i.ibb.co/Gt8mGn6/Github.png"
                        alt="Github"
                        border="0"
                    />
                    <img
                        className="transition duration-500 delay-150 h-[2.1557vw] w-[2.1557vw] cursor-pointer"
                        src="https://i.ibb.co/8M6kgc8/Figma.png"
                        alt="Figma"
                        border="0"
                    />
                </div>
            </div>
        </>
    );
};

export const TeamImage2 = ({ link }) => {
    return (
        <>
            <div className="image transition-all duration-500 group flex relative w-[24.79vw] h-[29.25vw]">
                <img
                    className="w-full h-full transition duration-1000 ease-in-out absolute group-hover:blur-[0.12vw]"
                    id="ourteamimage"
                    src={link}
                    alt="img2"
                    border="0"
                />
                <div className="absolute px-[3.27%] py-[5.45%] hidden group-hover:flex flex-col left-0 bottom-0">
                    <p className="font-bold text-[1.437vw] transition-all duration-1000 ease-in-out leading-[1.67vw] capitalize text-transparent group-hover:text-white">
                        ADAM WARLOCK
                    </p>
                    <p className="font-normal text-[0.838vw] text-transparent group-hover:text-[#FF9900] transition-all duration-1000 leading-[1.137vw] capitalize">
                        25/03/2022
                    </p>
                    <div className="absolute transition duration-500 flex gap-[1.4vw] py-[2.87vw] mt-[2.87vw] ">
                        <img
                            className="transition duration-500 h-[2.1557vw] w-[2.1557vw] cursor-pointer"
                            src="https://i.ibb.co/F5sgH48/LinkedIN.png"
                            alt="LinkedIN"
                            border="0"
                        />
                        <img
                            className="transition duration-500 h-[2.1557vw] w-[2.1557vw] cursor-pointer"
                            src="https://i.ibb.co/Gt8mGn6/Github.png"
                            alt="Github"
                            border="0"
                        />
                        <img
                            className="transition duration-500 delay-150 h-[2.1557vw] w-[2.1557vw] cursor-pointer"
                            src="https://i.ibb.co/8M6kgc8/Figma.png"
                            alt="Figma"
                            border="0"
                        />
                    </div>
                </div>

            </div>
        </>
    );
};
