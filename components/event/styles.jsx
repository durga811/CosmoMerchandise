import styled from 'styled-components';
//import tw from 'twin.macro';

export const EventSecn = styled.div`
height: 100vh;
  width: 100vw;
  background-color: black;
  position: relative;
  overflow: hidden;
  `
export const Logo = styled.img`
  position: absolute;
  z-index: 50;
  left: 4rem;
  top: 2rem;
  display: inline-block;
`
export const EveHeadingSec = styled.div`
  position: absolute;
  z-index: 50;
  right: 12rem;
  top: 2rem;
  height: 3rem;
  text-align: top;
  /* animation-duration: 3s;
  animation-name: slidein;


@keyframes slidein {
  from {
   opacity: 0;
  }

  to {
    opacity: 100;
  }
} */
  
`
export const HeadSty1 = styled.h1`
  display: inline-block;
  font-size: 2.5rem;
  position:absolute;
  right: 5rem;
  top:-10px ;
`
export const HeadSty2 = styled.h1`
  display: inline-block;
  font-size: 1.5rem;
  position:absolute;
  right: 0;
  top:-4.5px ;  
`
export const Stick= styled.div`
  display:inline-block;
  position:absolute;
  top:5px ;
  right: 4.5rem;
  width: 3px;
  height:50px ;
  border-radius: 16px;
  background-color: black;
`
export const Main = styled.div`
 height: 100vh;
  width: 90%;
  position: absolute;
  background-color:${props => props.info.bgColor};
  margin-left:${props => props.property.marginLeft};
 
  background-image:url(${props => props.property.bgImgUrl});
  background-size:cover;
  transition: margin-left .5s linear .25s,background-image .6s ease-in-out .35s;
  /* transition:background-image .5s ease-out .25s; */
`
export const DisplayEvent = styled.div`
  /* transition: all .5s linear .25s; */
  position: absolute;
  top: 10rem;
  right: 4rem;
  height: 400px;
  width: 500px;
  animation-duration: 3s;
  animation-name: slidein;
@keyframes slidein {
  from {
   opacity: 0;
  }

  to {
    opacity: 100;
  }
}
`
export const EventRouteBack = styled.div`
  height: 38px;
  width: ${props=>props.property};
  position: absolute;
  background-color: #2b2a2a6c;
  border-radius: 35px;
  transition: width .25s linear;
`
export const EventRoute = styled.div`
position: absolute;
  height: 38px;
  width: 210px;
  display: grid;
  grid-template-columns: 1fr 38px 38px 38px 38px;
  z-index: 10;
  align-items: center;
  justify-items:center;
`
export const Button = styled.button`

  background-color:#502725;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  font-weight: 600;

`
export const DisplayEventBox = styled.div`
 max-width:500px;
 height: 200px;
 position: absolute;
 top: 50px;
 display: flex;
 flex-wrap: wrap;
 
`
export const ECards =styled.div`
  height: 135px;
  width: 144px;
  overflow: hidden;
  border-radius: 15px;
  text-align: center;
  transition: width .25s linear;
  margin-right: 15px;
  margin-top: 20px;
`
