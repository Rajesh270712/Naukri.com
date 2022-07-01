import Carousel from "react-elastic-carousel";
// import Item from "./Item";
// import "./styles.css";s
import { Box } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
// import {BsFillGeoAltFill} from "react-icons/bs";
import styled from "styled-components";



const Item= styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 150px;
width: 70%;
border-radius:8px;
border: 1px solid #EAF1F5;
background-color:white;
padding:15px;

/* :hover{
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
} */
:hover{
box-shadow: 0px 4px 10px rgb(0 77 255 / 4%); }
color:black;
margin: 0 15px;
font-size: 1em;
`;



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];



export const Slider=()=> {
  return (
    <div style={{  fontFamily: "sansSerif",
      display: "flex",
      height: "200px",
      alignItems: "center",
      justifyContent: "space-around",}}>
      <Carousel breakPoints={breakPoints}>
        {arr.map((item)=>(

        <Item>
        <Box className="perdiv">
          <img style={{height:"70px", width:"70px",marginTop:"10px"}} src={item.image} />
          <h4 style={{fontWeight:"bolder",fontSize:"17px"}}>{item.title}</h4>
          <Box display={'flex'}  >
          <p style={{marginRight:"10px"}}>{item.subtitle}</p>
         <Box display={'flex'}>
         <StarIcon color={'orange'}/>
         <p>{item.rating}</p>
         </Box>

          </Box>
          <Box display={'flex'} >
         {/* < BsFillGeoAltFill /> */}
         {/* <img style={{width:"12px",height:"12px"}} src="https://static.naukimg.com/s/7/0/assets/images/src…jobs-wdgt/v1/resources/location-icon.c9524903.svg"/> */}

          <p style={{marginRight:"10px"}}>{item.location}</p>
        {/* <Image src="https://static.naukimg.com/s/7/0/assets/images/src…bs-wdgt/v1/resources/experience-icon.6dd9384e.svg"></Image> */}
          <p>{item.exp}</p>
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
    image:"https://img.naukri.com/logo_images/v3/1935074.gif",
    title:"Software Trainee",
    subtitle:"Navitas",
    rating:3.1,
    location:'Chennai',
    exp:'0-1 Yrs'
  },
  {
    image:"https://img.naukri.com/logo_images/v3/3272.gif",
    title:"Fullstack Software Developer",
    subtitle:"Sulekha",
    rating:3.9,
    location:'Chennai',
    exp:'0-3 Yrs'
  },
  {
    image:"https://img.naukri.com/logo_images/v3/25292.gif",
    title:"Software Engineer",
    subtitle:"Envestnet Yodlee",
    rating:3.7,
    location:'Banglore',
    exp:'0-2 Yrs'
  },
  {
    image:"https://img.naukri.com/logo_images/v3/54602.gif",
    title:"Job opening For AI Engineer",
    subtitle:"SLK Software",
    rating:3.7,
    location:'Banglore',
    exp:'0-3 Yrs'
  },
  {
    image:"https://img.naukri.com/logo_images/v3/530.gif",
    title:"Manual Tester-Freshers needed",
    subtitle:"Hurix",
    rating:3.6,
    location:'Pune',
    exp:'0-0 Yrs'
  },
  {
    image:"https://img.naukri.com/logo_images/v3/4650142.gif",
    title:"Java Software Developer",
    subtitle:":B.tech/ MCA / Msc /Bsc",
    rating:3.6,
    location:'Mohli,Chandigarh',
    exp:'0-1 Yrs'
  },
  {
    image:"https://img.naukri.com/logo_images/v3/80292.gif",
    title:"Fresher/Trainee (InternShip)",
    subtitle:"Resinova Chemie Ltd",
    rating:3.6,
    location:'Ahmedabad',
    exp:'0-1 Yrs'
  }

]