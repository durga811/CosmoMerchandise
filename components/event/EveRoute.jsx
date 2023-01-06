import React from 'react'
import { DisplayEvent ,EventRoute, EventRouteBack ,Button} from './styles'
const EveRoute = ({property ,RouteClickFun}) => {
  return (
    <>
    <div style={{position:"static"}}>
        <EventRouteBack property={property}><img style={{position:"absolute",right:"0" }} src="https://res.cloudinary.com/durga811/image/upload/c_scale,w_38/v1671704845/cosmo%20assets/cakra_yigpxo.png" alt="" /></EventRouteBack>
       <EventRoute>
            <p className='text-lg font-medium'>DAY</p>
            <Button onClick={()=>{RouteClickFun("96px","day1")}} >1</Button>
            <Button onClick={()=>{RouteClickFun("134px","day2")}}>2</Button>
            <Button onClick={()=>{RouteClickFun("172px","day3")}}>3</Button>
            <Button onClick={()=>{RouteClickFun("210px","day4")}}>4</Button>
        </EventRoute>
    </div>
    
    </>
  )
}

export default EveRoute