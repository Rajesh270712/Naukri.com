import React from "react";
import styled from "styled-components";
import {auth,provider} from "../firebase"
import { useDispatch, useSelector} from "react-redux";
import { setActiveUser,setUserLogOutState,selectUserName,selectUserEmail} from "../userSlice";

const Anchor = styled.a`
color:#8292B4;
text-decoration:none;
margin-left:80px;
cursor: pointer;
`;

const UlStyle = {
  "display":"inline-flex",
  "fontFamily":"sans-serif",
  "listStyleType":"none"
}

const Button = styled.button`
cursor: pointer;
font-size: 17px;
font-weight: 700;
padding: 10px 20px;
border-radius: 40px;
color: #457EFF;
background: white;
border: 1px solid #457EFF;
text-align: center;

@media all and (max-width: 820px) {
  padding: 10px 5px;
  font-size: 10px;
}
@media all and (max-width: 620px) {
  display: none;
}
`;

export default function Navbar(){
  const dispatch = useDispatch()

  const userName = useSelector(selectUserName)
  const userEmail = useSelector(selectUserEmail)

  const handleSignIn = () => {
auth.signInWithPopup(provider).then((result)=>{
  dispatch(setActiveUser({
    userName:result.user.displayName,
    userEmail:result.user.email
  }))
  .catch((err) => console.log(err))
})
  }

  const handleSignOut = () => {
auth.signOut().then(()=>{(dispatch(setUserLogOutState()))
}).catch((err) => alert(err.message))
  }
  return(
    <div style={{display:"flex",margin:"13px 0px 13px 0px"}} >
      <div>

      <a href="https://www.naukri.com" target="_blank">
      <img style = {{"marginLeft":"180px","marginTop":"10px"}} src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" height="31" width="186" />
      </a>
      </div>
      <div>

      <ul style={UlStyle}>
        <li><Anchor href="https://www.naukri.com/browse-jobs" target="_blank">Jobs</Anchor></li>
        <li><Anchor href = "https://www.naukri.com/top-company-jobs" target="_blank">Companies</Anchor></li>
        <li><Anchor href = "https://resume.naukri.com/resume-services?fftid=100001" target="_blank">Services</Anchor></li>
        <li style={{"color":"#8292B4","marginLeft":"80px"}}>Resources</li>
        </ul>
        <Button onClick={handleSignIn} style={{"marginLeft":"100px"}}>Login</Button>
        <Button style={{"background":"#FF7555","color":"white","border":"none","marginLeft":"40px"}}>Register</Button>
      </div>
      </div>
  )
}