import Carousel from "react-elastic-carousel";
// import Item from "./Item4";
// import "./styles4.css";
import { Box, Image} from "@chakra-ui/react";

import styled from "styled-components";


const Item=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
  width: 80%;
  border-radius:8px;
 border: 1px solid #EAF1F5;
 background-color:white;
 padding: 7%;

 
 /* :hover{
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
 } */
 :hover{
  box-shadow: 0px 4px 10px rgb(0 77 255 / 4%); }
`;


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1000, itemsToShow: 4 }
];

export const Slider4=()=> {
  return (
    <div style={{fontFamily: "sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"}}>
      <Carousel breakPoints={breakPoints}>
        {arr.map((item)=>(

        <Item>
        <Box >
      <h3 style={{fontWeight:"bolder",fontSize:"17px"}}> {item.title}<span style={{marginLeft:"5px",color:"gray"}}></span></h3>
      
      <p style={{color:"gray"}}>{item.subtitle}</p>
<Box display={'flex'} marginTop={"10px"}>
    <Image src ={item.image1}
    h={'35px'}
    w={'35px'}
    marginRight={'2'}></Image>
    <Image src={item.image2}
      h={'35px'}
      w={'35px'}
      marginRight={'2'}></Image>
    <Image src={item.image3}
      h={'35px'}
      w={'35px'}
      marginRight={'2'}></Image>
    <Image src={item.image4}
      h={'35px'}
      w={'35px'}
      marginRight={'2'}></Image>

</Box>
        </Box>
          </Item>
        ))}
        
      </Carousel>
    </div>
  );
}



const arr=[
  {
    
    title:"Fortune 500",
   
    subtitle:"236 are actively hiring",
   image1:"https://img.naukimg.com/logo_images/groups/v1/240920.gif",

   image2:"https://img.naukimg.com/logo_images/groups/v1/692902.gif",

   image3:"https://img.naukimg.com/logo_images/groups/v1/2519816.gif",
   image4:"https://img.naukimg.com/logo_images/groups/v1/166008.gif"
   
  },
  {
   
    
    title:"Unicorns",
   
    subtitle:"165 are actively hiring",
    image1:"https://img.naukimg.com/logo_images/groups/v1/2641916.gif",

   image2:"https://img.naukimg.com/logo_images/groups/v1/1285014.gif",

   image3:"https://img.naukimg.com/logo_images/groups/v1/2519816.gif",
   image4:"https://img.naukimg.com/logo_images/groups/v1/4614807.gif"
   
   
  },
  {
   
   
    title:"Startups",
    
    subtitle:"27 are actively hiring",
    image1:"https://img.naukimg.com/logo_images/groups/v1/4638851.gif",
image2:"https://img.naukimg.com/logo_images/groups/v1/4630679.gif",
image3:"https://img.naukimg.com/logo_images/groups/v1/702220.gif",
image4:"https://img.naukimg.com/logo_images/groups/v1/4632961.gif"
   
   
   
  },
  
    
  {
   
    title:"Product",
   
    subtitle:"236 are actively hiring",
   image1:"https://img.naukimg.com/logo_images/groups/v1/240920.gif",

   image2:"https://img.naukimg.com/logo_images/groups/v1/692902.gif",

   image3:"https://img.naukimg.com/logo_images/groups/v1/2519816.gif",
   image4:"https://img.naukimg.com/logo_images/groups/v1/166008.gif"
   
  },
   
  
  
  {
   
    
    title:"Internet",
   
    subtitle:"165 are actively hiring",
    image1:"https://img.naukimg.com/logo_images/groups/v1/2641916.gif",

   image2:"https://img.naukimg.com/logo_images/groups/v1/1285014.gif",

   image3:"https://img.naukimg.com/logo_images/groups/v1/2519816.gif",
   image4:"https://img.naukimg.com/logo_images/groups/v1/4614807.gif"
   
   
  },
  {
   
  
    title:"Edtech",
    
    subtitle:"27 are actively hiring",
    image1:"https://img.naukimg.com/logo_images/groups/v1/4638851.gif",
image2:"https://img.naukimg.com/logo_images/groups/v1/4630679.gif",
image3:"https://img.naukimg.com/logo_images/groups/v1/702220.gif",
image4:"https://img.naukimg.com/logo_images/groups/v1/4632961.gif"
   
   
  },
  {
   
    title:"Internet",
   
    subtitle:"165 are actively hiring",
    image1:"https://img.naukimg.com/logo_images/groups/v1/2641916.gif",

   image2:"https://img.naukimg.com/logo_images/groups/v1/1285014.gif",

   image3:"https://img.naukimg.com/logo_images/groups/v1/2519816.gif",
   image4:"https://img.naukimg.com/logo_images/groups/v1/4614807.gif"
   

  
  },

]