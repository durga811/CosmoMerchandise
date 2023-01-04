import React from 'react'
import EventSec from './EventSec';

import { Main } from './styles';
const MainSec = ({property,info,clickFun}) => {
  
  return (
  <Main info={info} property={property} onClick={()=>{clickFun(info.sec)}}>
    {property.eventSec && (<EventSec individualEvents={property.individualEvents}/>)}
    </Main>
  );
}

export default MainSec