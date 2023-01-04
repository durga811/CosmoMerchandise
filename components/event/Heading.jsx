import React from 'react'
import {  EveHeadingSec,HeadSty1 ,HeadSty2,Stick} from './styles'
const Heading = ({property}) => {
  return (
    <EveHeadingSec>
        <HeadSty1 style={{color:property.color1}}>{property.h1}</HeadSty1>
        <Stick></Stick>
        <HeadSty2 style={{color:property.color2}}>{property.h2}</HeadSty2>
    </EveHeadingSec>
  )
}

export default Heading