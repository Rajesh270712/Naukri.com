import React from "react";
import { Box, Button, Input, Image, Select} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import styles from "./LandingPage1.module.css";
// import { BsFacebook, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import { Slider } from "./Slider";
import { Slider2 } from "./Slider2";
import { Slider3 } from "./Slider3";
import { Slider4 } from "./Slider4";
import { Link } from "react-router-dom";
import "./chatbot.css"
// import { Navbar } from "./Navbar1";

const LandingPage1 = () => {
  const [show,setShow]=React.useState(false)

function closePopup(){
  // this.parentNode.style.display = 'none';

  setShow(true)
}

function changeStatus(){
  setShow(false)
    
}

function displayMessage(){
  // document.getElementsByClassName("collapseMsgWrapper").style.display="block"
   if(show){
   setShow(false)
   }
   else{
    setShow(true)
   }

}




  return (
  
    <Box  color={"#1b2437"} background={ URL="static.naukimg.com/s/7/103/i/homepageBubble.cf43a7a8.svg" }
    backgroundImage= {URL="https://static.naukimg.com/s/7/103/i/homepageBubble.cf43a7a8.svg"}
    backgroundPositionX= {"50%"}
    backgroundPositionY= {"center"}
    backgroundSize= {"cover"}
    backgroundRepeatX= {"initial"}
    backgroundRepeatY= {"initial"}
    backgroundAttachment={"initial"} 
    backgroundOrigin= {"initial"}
    backgroundClip= {"initial"}
    backgroundColor= {"initial"}
    fontFamily= {"Inter"}>

         <Box display={"flex"} margin={"auto"}  text-align={"center"} >
        <Heading as="h1" font-weight= {"700"}
               font-size= {"35px"}
              lineHeight= {"50px"}
              color= {"#1b2437"}
              margin-top= {"30px"}
              margin={"auto"}
              font-family={"Roboto Slab"} >
          Find your dream job now
        </Heading>
    
        </Box>

      <br/>
      <Box display={"flex"} margin={"auto"}>
        <p style={{    fontSize: "20px",lineHeight: "24px",color:"#8292b4",fontFamily: "Inter",margin:"auto" }}>5 lakh+ jobs for you to explore</p>
      </Box>

      <Box
        w={"80%"}
        p={4}
        display="flex"
        margin="auto"
        height={"60px"}
        alignItems={"center"}
        marginTop="20px"
        borderRadius={"27px"}
        justifyContent={"space-between"}
        boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
      >
        <SearchIcon paddingTop={"0.5%"} height={"100%"}  />
        <Box width={"80%"} display={"flex"} justifyContent={"space-between"}>
        <Input 
          type="text"
          placeholder="Enter skills / designations"
          padding={3}
          w={"33%"}
          border={"none"}
          borderRight={"1px solid lightGrey"}
        />
        {/* <Box w={"2px"} height={"80%"} backgroundColor={"grey"}></Box> */}
        <Select placeholder={"Select experience"}  border={"none"} borderBottom={"none"}  color= {"grey"}  width={"30%"}>
          <option>Fresher</option>
          <option>1 year</option>
          <option>2 year</option>
          
        </Select>
        <Input placeholder={"Enter Location"} width={"30%"} border={"none"} borderLeft={"0.5px solid lightGrey"}/>
        </Box>

        <Button background={"blue.400"} color={"white"} p={4} borderRadius={"20px"} width={"13%"} >
          Search
        </Button>
      </Box>

      <Box
        w={"70%"}
        h={"200px"}
        margin={"auto"}
        marginTop={"4%"}
        paddingLeft={"3%"}
        display={"flex"}
        alignItems={"center"}
        borderRadius={"10px"}
        border={"1px dotted lightGray"}
        justifyContent={"space-around"}
        boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
        // padding={"10px"}
      >
        <Box w={"25%"} textAlign={"start"} fontSize={"20px"}>
          <ol style={{ padding: "20px"}} >
            <li style={{ padding: "3%", color:"black", fontWeight:"bolder"}}>Get discoverd ></li>
            <li style={{ padding: "3%" }}>Get contacted</li>
            <li style={{ padding: "3%" }}>Get hired</li>
          </ol>
        </Box>

        <Box 
        w={"18%"} height={"50%"}  justifyContent={"space-around"}>
          <Box display={"flex"} gap={"5px"}>
            
            <Image 
              src={"https://img.naukimg.com/logo_images/groups/v1/390292.gif"}
              height={"30%"}
              width={"30%"}
            >
            </Image>
            
            <Image 
              src={"https://img.naukimg.com/logo_images/groups/v1/4156.gif"}
              height={"30%"}
              width={"30%"}
            ></Image>

          </Box>

          <Box display={"flex"} gap={"5px"} marginTop={"5px"}>
            
            <Image
              src={"https://img.naukimg.com/logo_images/groups/v1/2016162.gif"}
              height={"30%"}
              width={"30%"}
            ></Image>
          
           
            <Image
              src={"https://img.naukimg.com/logo_images/groups/v1/3448628.gif"}
              height={"30%"}
              width={"30%"}
            ></Image>
         
          </Box>
        </Box>
        <Box w={"60%"} textAlign={"start"} padding={"10px"}> 
          <h2 style={{fontWeight:"bolder", fontSize:"18px"}}>Become searchable by top companies in your domain</h2>

          <p style={{color:"grey"}}>Companies search for candidate CVs directly for open positions</p>
          <Button
            background={"rgb(255,117,85)"}
            borderRadius={"50px"}
            color={"white"}
            width={"40%"}
            marginTop={"3%"}
          >
            Register for free
          </Button>
        </Box>
        
      </Box>

      <div class="chatbotPopUp">


      {  show?<div class="botmain">
        <div id="botTop"><div><img src="https://static.naukimg.com/s/7/103/i/botIcon.9ccc1ddd.svg"/></div><div><img onClick={changeStatus} src="//static.naukimg.com/s/7/103/i/cross.8cd86aaf.svg"/></div></div>
           <div>Hi! I am Naukri’s smart job search assistant!</div>
           <div>
                I see that you are looking for jobs.
                New jobs are posted on Naukri every day.
            </div>
           <div>Please click on register and create an account to get the most out of Naukri!</div>
           <button>Register</button>
           </div>
           :
          //  <p>hello</p>
        
             <div class="collapseMsgWrapper">

                  <div   class="crossWrapper"><img class="crossIcon" onClick={closePopup} src="//static.naukimg.com/s/7/103/i/cross.8cd86aaf.svg" /> </div>
             
                  <div class="collapseBotItem"><span class="botText">Want to apply to jobs? Register now!</span> </div>
                  {/* <div class="collapseBotChips"> 

               <button class="singleSelectChip" >Register Now</button> 
                 </div>  */}
               </div>
                      
                
  }
         
     
        <div class="floatIcon" onClick={displayMessage}>
              <div class="floatingChatIcon">
                  <div class="chatbotOnline">
                        <div class="online"></div>
                  </div>
                  <img src="//static.naukimg.com/s/7/103/i/naukriIcon.74e6a29a.png"  class="chatbotNaukIcon" />
              </div>
          </div>

      </div>
      
      <Heading as="h4" textAlign={"center"} padding={"50px"} fontSize={"30px"}>
        Trending on Naukri today
      </Heading>
      <Slider2></Slider2>
      <Heading
        as="h4"
        textAlign={"center"}
        paddingTop={"50px"}
        fontSize={"30px"}
      >
        Jobs you may be interested in
      </Heading>

      <Box
        display={"flex"}
        margin={"auto"}
        width={"50%"}
        p={"1%"}
        className={styles.jobsButton}
      >
        <Button style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",padding:"0px 20px 0px 20px",color:"gray"}}>Full Stack Developer(308)</Button>
        <Button style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",padding:"0px 20px 0px 20px", color:"grey"}}> Front End Developer(55)</Button>
        <Button style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",padding:"0px 20px 0px 20px",color:"grey"}}>Back End Developer(89)</Button>
      </Box>
      <Slider></Slider>
      
      <br/>
      <Heading as="h5" textAlign={"center"} padding={"20px"} fontSize={"30px"}>
        Featured companies actively hiring
      </Heading><br/><br/>
      <Slider3></Slider3>
      <br/><br/><br/>
      <Heading as="h4" textAlign={"center"} padding={"20px"} fontSize={"30px"}>
        Explore top companies hiring now
      </Heading>
      <Slider4></Slider4>

      <Box
        width={"80%"}
        display={"flex"}
        margin={"auto"}
        background={"rgb(241,245,255)"}
        borderRadius={"25px"}
        marginTop={"5%"}
        marginBottom={"5%"}
        textAlign={"start"}
      >

        <Box padding={10} width={"70%"}>

          <Heading as="h3" fontSize={"30px"}>
          Stand out among recruiters<br/> with a video profile
          </Heading>
          <br/>
          <Box width={"90%"} display={"flex"} marginBottom={"15px"}>
          
            <Box marginRight={"12%"} marginBottom={"15px"}>
              <p>Get real-time job updates & more!</p><br/>
              <Box display={"flex"} marginBottom={"15px"} border={"1px solid gray"} w={"100%"} borderRadius={"15px"} padding={"5px"} background={"white"}>
                <input type="text" placeholder="Enter mobile number..." style={{borderRadius:"16px"}}/>
                <button
                  style={{ background: "rgb(0,255,255)", color: "white", padding: "5px", borderRadius:"20px", width:"50%" }}
                >
                  Get Link
                </button>
              </Box>
              <br/>
              <Box display={"flex"} marginBottom={"15px"}>
                <Image
                  src={
                    "https://static.naukimg.com/s/0/0/i/download-app-link/Gplay.png"
                  }
                ></Image>
                <Image
                  src={
                    "https://static.naukimg.com/s/0/0/i/download-app-link/Appstore.png"
                  }
                ></Image>
              </Box>
            </Box>
            <Box>
              <Image
                src={
                  "https://static.naukimg.com/s/0/0/i/download-app-link/qr-code.svg"
                }
                h={"60px"}
                w={"60px"}
              ></Image>
            </Box>
          </Box>
        </Box>
        <Box>
          <Image
            src={
              "https://static.naukimg.com/s/0/0/i/download-app-link/MaskGroup_v4.png"
            }
          ></Image>
        </Box>
      </Box>
      <Box
        w={"100%"}
        height={"300px"}
        marginBottom={"5%"}
        padding={4}
        display={"flex"}
        boxShadow={
          "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
        }
      >
        <Box w={"20%"} padding={"2%"}>
          <Image
            src={"https://static.naukimg.com/s/4/100/i/naukri_Logo.png"}
          ></Image>
          <p style={{ marginBottom: "5%" }}>Connect with us</p>
          <Box display={"flex"}>
          </Box>
        </Box>
        <Box w={"20%"} paddingTop={"3%"}>
          <Link to="">About us</Link>
          <br></br>
          <br></br>
          <Link to="">Careers</Link>
          <br></br>
          <br></br>
          <Link to="">Employer home</Link>
          <br></br>
          <br></br>
          <Link to="">Sitemap</Link>
        </Box>
        <Box w={"20%"} paddingTop={"3%"}>
          <Link to="">Help center</Link>
          <br></br>
          <br></br>
          <Link to="">Summons/Notices</Link>
          <br></br>
          <br></br>
          <Link to="">Grievances</Link>
          <br></br>
          <br></br>
          <Link to="">Report isuue</Link>
        </Box>
        <Box w={"20%"} paddingTop={"3%"}>
          <Link to="">Privacy policy</Link>
          <br></br>
          <br></br>
          <Link to="">Terms & conditions</Link>
          <br></br>
          <br></br>
          <Link to="">Fraud alert</Link>
          <br></br>
          <br></br>
          <Link to="">Trust safety</Link>
        </Box>

        <Box w={"30%"} border={"0.1px solid gray"}
        borderRadius={"15px"}
        height={"40%"} p={4} marginTop={"5%"}>
          <h5>Apply on the go</h5>
          <p>Get real-time job updates on our App</p>
          
          <Box display={"flex"} marginBottom={"15px"}>
                <Image
                  src={
                    "https://static.naukimg.com/s/0/0/i/download-app-link/Gplay.png"
                  }
                  w={"40%"}
                ></Image>
                <Image
                  src={
                    "https://static.naukimg.com/s/0/0/i/download-app-link/Appstore.png"
                  }
                  w={"40%"}
                ></Image>

               
          </Box>
        </Box>
      </Box>
    </Box>
  );
};


export default LandingPage1