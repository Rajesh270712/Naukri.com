import Carousel from "react-elastic-carousel";
// import Item from "./Item3";
import "./styles3.css";
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
  width: 100%;
 border-radius:22px;
  border:0.1px solid gray;
  // box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
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
    <div className="slide">
      <Carousel breakPoints={breakPoints}>
        {arr.map((item)=>(

        <Item>
        <Box className="perdiv">
          <Box display={'flex'} w={"40%"} margin={'auto'}>

       <Image src={item.image}></Image>
          </Box>
      <div>
        <h4>{item.title}</h4>
        <p>
            <StarIcon color={'orange'}></StarIcon> {item.reviews}
        </p>
      </div>
      <p>{item.subtitle}</p>
      <Button
      background={'rgb(241,245,255)'}
      color={'blue'}
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