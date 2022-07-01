import React from "react";
import {auth,provider,db} from "./firebase"
import { useDispatch, useSelector} from "react-redux";
import { setActiveUser,setUserLogOutState,selectUserName,selectUserEmail} from "./userSlice"
import styled from "styled-components";

// const InputStyle = styled.input`
// width:280px;
// height:30px;
// `;

// const ButtonLogin = styled.button`
//   cursor: pointer;
//   font-size: 14px;
//   font-weight: 700;
//   padding: 10px 25px;
//   border-radius: 5px;
//   color: #fff;
//   background: #00bcd4;
//   border: 0px;
//   text-align: center;
//   width:300px;
//   height:40px;
// `;

const Button = styled.button`
  cursor: pointer;
  font-size: 14px;
  padding: 10px 15px;
  border-radius: 10px;
  color: #757575;
  background: white;
  border: 1px solid #757575 ;
  text-align: center;
  margin-top:1%;
  margin-right:200px;
  width: 100%;
  height: 30%;
`


export default function Login(){
    const dispatch = useDispatch()

  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

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
            <Button onClick={handleSignIn}>
              <div style={{display:"flex", alignItems:"center"}}>
              <img src="https://img.icons8.com/color/48/000000/google-logo.png" style={{height: "30px", marginLeft: "30px"}}/>
            <div style={{marginLeft:"30px", fontSize: "16px"}}>
              Sign in with Google
            </div>
              </div>
            </Button>
          )
        }
       </div>
)
}