import React from "react";
import Navbar from "./Navbar"
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
  } from '@chakra-ui/react'
import {auth,provider,db} from "./firebase"
import { useDispatch, useSelector} from "react-redux";
import { setActiveUser,setUserLogOutState,selectUserName,selectUserEmail} from "./features/userSlice"
import styled from "styled-components";

const InputStyle = styled.input`
width:280px;
height:30px;
`;

const ButtonLogin = styled.button`
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  padding: 10px 25px;
  border-radius: 5px;
  color: #fff;
  background: #00bcd4;
  border: 0px;
  text-align: center;
  width:300px;
  height:40px;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 14px;
  padding: 15px 30px;
  border-radius: 30px;
  color: #757575;
  background: white;
  border: 1px solid #757575 ;
  text-align: center;
  margin-top:1%;
  margin-right:200px;
  width:300px;
`


export default function Login(){
    const dispatch = useDispatch()

  const userName = useSelector(selectUserName)
  const userEmail = useSelector(selectUserEmail)

  const handleSignIn = () => {
auth.signInWithPopup(provider).then((result)=>{
  dispatch(setActiveUser({
    userName:result.user.displayName,
    userEmail:result.user.email
  }))
})
  }

  const handleSignOut = () => {
auth.signOut().then(()=>{(dispatch(setUserLogOutState()))
}).catch((err) => alert(err.message))
  }
return (
    <div>
   {
          userName ? (
            <Button onClick={handleSignOut}>{"Hello!" + " " + userName + "," + " " + "want to Logout?"}</Button>
          ) : (
            <Button onClick={handleSignIn}><img src = "data:image/png;base64,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" width="18px" height="20px" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign up with google</Button>
          )
        }
       </div>
)
}