import React from "react";
import { Ourteamimage1, Ourteamimager1 } from "./Ourteamimage";
import { TeamImage, TeamImage2 } from "./TeamImage";
export default function Ourteam1() {
    const bgstyle = {
        // backgroundrepeat: "repeat",
        backgroundColor: "#0d211e",
        backgroundSize: "100% auto",
        backgroundImage: "url(https://i.ibb.co/sgHr4x5/Vector.png)",
    }
    return (
        <>
            <div className=" flex flex-col items-center relative h-full w-[100%]"
                style={bgstyle}>
                <div className="image-container flex flex-wrap flex-col justify-center items-center relative px-[6.886vw] pb-[6.886vw] mt-[8.443vw] bg-[#153c3780] max-h-full ">
                    <p className="pt-[2.0958vw] pb-[4.7902vw] text-white"> OUR PATRON</p>
                    <TeamImage link="https://i.ibb.co/jwmjqhd/img2.png" />
                </div>
                <div className="image-container flex flex-wrap flex-col justify-center items-center relative px-[1.976vw] pb-[6.886vw] mt-[8.443vw] bg-[#153c3780] max-h-full z-10">
                    <p className="pt-[2.0958vw] pb-[4.7902vw] text-white">
                        {" "}
                        DEAN SW AND PRESIDENT SAC
                    </p>
                    <div className="image-group gap-[0.283vw] flex flex-wrap">
                        <TeamImage link="https://i.ibb.co/jwmjqhd/img2.png" />
                        <TeamImage link="https://i.ibb.co/3fcnwtc/img3.png" />
                    </div>
                </div>
                <div className="image-container flex flex-wrap flex-col justify-center items-center relative px-[3.5vw] pb-[5.449vw] mt-[8.443vw] bg-[#153c3780] max-h-full z-10">
                    <p className="pt-[2.0958vw] pb-[4.7902vw] text-white">
                        {" "}
                        SAC OFFICIALS{" "}
                    </p>
                    <div className="image-group flex flex-wrap gap-y-[5.449vw] gap-x-[1.593vw]">
                        <TeamImage link="https://i.ibb.co/jwmjqhd/img2.png" />
                        <TeamImage link="https://i.ibb.co/3fcnwtc/img3.png" />
                        <TeamImage link="https://i.ibb.co/rxfvyGx/img1.png" />
                        <TeamImage link="https://i.ibb.co/yPNM3Dp/img4.png" />
                        <TeamImage link="https://i.ibb.co/rxfvyGx/img1.png" />
                        <TeamImage link="https://i.ibb.co/yPNM3Dp/img4.png" />
                    </div>
                </div>
                <div className="image-container flex flex-wrap flex-col justify-center items-center relative px-[1.976vw] pb-[6.886vw] mt-[8.443vw] bg-[#153c3780] max-h-full z-10">
                    <p className="pt-[2.0958vw] pb-[4.7902vw] text-white"> CONVENOR </p>
                    <div className="image-group gap-[0.283vw] flex flex-wrap">
                        <TeamImage link="https://i.ibb.co/jwmjqhd/img2.png" />
                        <TeamImage link="https://i.ibb.co/3fcnwtc/img3.png" />
                    </div>
                </div>
                <div
                    className="image-container flex flex-wrap flex-col justify-center items-center relative px-[8.5vw] 
                  pb-[5.449vw] mt-[8.443vw] bg-[#153c3780] max-h-full z-10">
                    <p className="pt-[2.0958vw] pb-[4.7902vw] text-white"> CORE TEAM</p>
                    <div className="image-group flex flex-wrap gap-y-[5.449vw] gap-x-[1.593vw]">
                        <TeamImage2 link="https://i.ibb.co/3fcnwtc/img3.png" />
                        <TeamImage2 link="https://i.ibb.co/3fcnwtc/img3.png" />
                        <TeamImage2 link="https://i.ibb.co/3fcnwtc/img3.png" />
                        <TeamImage2 link="https://i.ibb.co/rxfvyGx/img1.png" />
                        <TeamImage2 link="https://i.ibb.co/yPNM3Dp/img4.png" />
                        <TeamImage2 link="https://i.ibb.co/yPNM3Dp/img4.png" />
                        <TeamImage2 link="https://i.ibb.co/rxfvyGx/img1.png" />
                        <TeamImage2 link="https://i.ibb.co/yPNM3Dp/img4.png" />
                        <TeamImage2 link="https://i.ibb.co/yPNM3Dp/img4.png" />
                    </div>
                </div>
            </div>
        </>
    );
}
