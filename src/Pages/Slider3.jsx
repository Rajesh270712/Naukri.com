import Carousel from "react-elastic-carousel";
// import Item from "./Item3";
// import "./styles3.css";
import { Box, Image ,Button} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
// import {BsFillGeoAltFill} from "react-icons/bs"
// import { useMotionTemplate } from "framer-motion";
import styled from "styled-components";

const Item= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 90%;
 border-radius:22px;
 box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  text-align: center;
 /* :hover{
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
 } */
 :hover{
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
 }
`;


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1000, itemsToShow: 4 }
];

export const Slider3=()=> {
  return (
    <div  style={{fontFamily: "sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
    marginTop: "20px"}}>
      <Carousel breakPoints={breakPoints}>
        {arr.map((item)=>(

        <Item>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"10px"} >
            <Box display={'flex'} w={"40%"} margin={'auto'}>

            <Image src={item.image}></Image>
        </Box>
      <div style={{backgroundColor:"lightYellow", borderRadius:"5px"}}>
        <h4 style={{fontWeight:"bolder",fontSize:"17px"}}>{item.title}</h4>
        <p>
            <StarIcon color={'orange'}></StarIcon> {item.reviews}
        </p>
      </div>
      <p>{item.subtitle}</p>
      <Button
      background={'blue.100'}
      borderRadius={"20px"}
      color={'blue'}
      boxShadow={"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"}
      >View jobs</Button>
        </Box>
          </Item>
        ))}
        
      </Carousel>
    </div>
  );
}



const arr=[
  {
    image:"https://img.naukimg.com/logo_images/groups/v2/42932.gif",
    title:"Genpact",
    reviews:"4.0 | 19.1K+ reviews",
    subtitle:"Global prossional services firm",
   
   
  },
  {
   
    image:"https://img.naukimg.com/logo_images/groups/v2/18850.gif",
    title:"Oracle",
    reviews:"3.9 | 3.5K+ reviews",
    subtitle:"Cloud technology company since 1977",
   
   
  },
  {
   
    image:"	https://img.naukimg.com/logo_images/groups/v2/3835862.gif",
    title:"Persistent",
    reviews:"4.2 | 1.3K+ reviews",
    subtitle:"Trusted global solutions company",
   
   
   
  },
  
    
  {
   
    image:"https://img.naukimg.com/logo_images/groups/v2/18850.gif",
    title:"Oracle",
    reviews:"3.9 | 3.5K+ reviews",
    subtitle:"Cloud technology company since 1977",
   
   
  },
  
  {
   
    image:"	https://img.naukimg.com/logo_images/groups/v2/2436002.gif",
    title:"Xoriant",
    reviews:"4.4 | 880 reviews",
    subtitle:"Software development & technology services firm",
   

  
  },
  {
   
    image:"	https://img.naukimg.com/logo_images/groups/v2/3835862.gif",
    title:"Persistent",
    reviews:"4.2 | 1.3K+ reviews",
    subtitle:"Trusted global solutions company",
   
   
   
  },
  {
   
    image:"	https://img.naukimg.com/logo_images/groups/v2/2436002.gif",
    title:"Xoriant",
    reviews:"4.4 | 880 reviews",
    subtitle:"Software development & technology services firm",
   

  
  },

]