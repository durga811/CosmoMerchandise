import React, { useState } from "react";
import Heading from "../components/event/Heading";
import MainSec from "../components/event/MainSec";
import { EventSecn, Logo } from "../components/event/styles";
import allEvents from "../components/event/eventsInfo";


const EventCom = () => {
    const objMain = {
        info: {
            logo: "https://res.cloudinary.com/durga811/image/upload/v1671704844/cosmo%20assets/cosmo_logo_anymzn.png",
            dance: { sec: "dance", bgColor: "#153C37" },
            music: { sec: "music", bgColor: "#A34744" },
            drama: { sec: "drama", bgColor: "#EDAD38" },
        },
        danceClick: {
            heading: {
                h1: "नृत्य",
                h2: "Dance",
                color1: "#FEE59A",
                color2: "",
            },
            dance: {
                individualEvents: allEvents.danceEvents,
                eventSec: true,
                marginLeft: "0",
                bgImgUrl:
                    "https://res.cloudinary.com/durga811/image/upload/v1671704891/cosmo%20assets/dance_bg_mwmgjp.png",
            },
            music: {
                marginLeft: "90%",
            },
            drama: {
                marginLeft: "95%",
            },
        },
        musicClick: {
            heading: {
                h1: "संगीत",
                h2: "Music",
                color1: "#FEE59A",
                color2: "",
            },
            dance: {
                marginLeft: "0",
            },
            music: {
                individualEvents: allEvents.musicEvents,
                eventSec: true,
                marginLeft: "5%",
                bgImgUrl:
                    "https://res.cloudinary.com/durga811/image/upload/v1671704891/cosmo%20assets/song_bg_lcdb6c.png",
            },
            drama: {
                marginLeft: "95%",
            },
        },
        dramaClick: {
            heading: {
                h1: "नाटक",
                h2: "Drama",
                color1: "#A34645",
                color2: "#183C38",
            },
            dance: {
                marginLeft: "0",
            },
            music: {
                marginLeft: "5%",
            },
            drama: {
                individualEvents: allEvents.dramaEvents,
                eventSec: true,
                marginLeft: "10%",
                bgImgUrl:
                    "https://res.cloudinary.com/durga811/image/upload/v1671704891/cosmo%20assets/drama_bg_oll5m0.png",
            },
        },
    };

    const [clickState, setClickState] = useState(objMain.musicClick);
    const clickFun = (para) => {
        if (para == "drama") setClickState(objMain.dramaClick);
        if (para == "music") setClickState(objMain.musicClick);
        if (para == "dance") setClickState(objMain.danceClick);
    };
    return (
        <EventSecn>
            <Logo src={objMain.info.logo} alt="cosmo logo" />
            <Heading property={clickState.heading} />
            <MainSec
                property={clickState.dance}
                info={objMain.info.dance}
                clickFun={clickFun}
            />
            <MainSec
                property={clickState.music}
                info={objMain.info.music}
                clickFun={clickFun}
            />
            <MainSec
                property={clickState.drama}
                info={objMain.info.drama}
                clickFun={clickFun}
            />
        </EventSecn>
    );
};

export default EventCom;
