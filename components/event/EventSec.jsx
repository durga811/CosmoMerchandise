import React, { useState } from 'react'
import EventCards from './EventCards';
import EveRoute from './EveRoute'
import { DisplayEvent ,DisplayEventBox} from './styles';


const EventSec = ({individualEvents}) => {
    const [routBackWidth,setRoutBackWidth]=useState("96px");
    const [selectDay,setSelectDay]=useState("day1");
    const RouteClickFun =(para1,para2)=>{
        setRoutBackWidth(para1);
        setSelectDay(para2);
    }
  return (<>
  <DisplayEvent>
    <EveRoute property={routBackWidth} RouteClickFun ={RouteClickFun} />
    <DisplayEventBox>


<EventCards/><EventCards/><EventCards/><EventCards/><EventCards/>
    </DisplayEventBox>
  </DisplayEvent>
    </>
  )
}

export default EventSec