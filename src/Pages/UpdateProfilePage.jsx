import styled from "styled-components";
import { BiPen } from "react-icons/bi";
import { BiBox } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import { GoLocation } from 'react-icons/go';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { AiOutlineMail } from "react-icons/ai";

const ProfileDatailsOverlay = styled.div`
margin-left: 14%;
margin-right: 14%;
display: flex;
gap: 2%;
padding: 1.3%;
background-color: #4A90E2;
color: white;
box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%), 0 1px 2px 0 rgb(0 0 0 / 10%), 0 2px 1px -2px rgb(0 0 0 / 20%);
svg{
    display: inline-block;
    vertical-align: middle;
    
}
`
const ProfileImageContainer = styled.span`
height: 50px;
width: 60px;
border-radius: 50px;
border:  1px solid black;
background-color: white;
img{
    height: 100%;
    width: 100%;
}
`
const DisplayContainer = styled.div`
flex-basis: 55%;

`;
const HeaderContainer = styled.div`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 4%;
    font-family: Roboto,sans-serif;
`;
const ShortDetailsSnap = styled.div`
display: flex;
flex-direction : column;
`;
const OneWrapper = styled.div`
display: flex;
div{
    flex-basis: 45%;
}
span{
    font-weight: 300;
    font-size: 13px;
    margin-left: 4%;
}
`;
const TwoWrapper = styled.div`
display: flex;
div{
    flex-basis: 45%;
}
span{
    font-weight: 300;
    font-size: 13px;
    margin-left: 4%;
}
`;
const ThreeWrapper = styled.div`
display: flex;
div{
    flex-basis: 45%;
}
span{
    font-weight: 300;
    font-size: 13px;
    margin-left: 4%;
}
`;
const MissingDetailWrapper = styled.div`
display: flex;
justify-content: space-between;
width: 80%;
margin-top: 4%;
align-items: baseline;
.smallfont{
    font-size: 11px;
    
    height: 12%;
}
`;
const DeterminateDiv = styled.div`
    width: 30%;
    height: 5px;
    background-color: white;
    margin-bottom: 0;
    cursor: pointer;
`
const DeterminateLine = styled.div`
    width: 80%;
    height: 1px;
    background-color: white;
    cursor: pointer;
`
const PendingActionsContainer = styled.div`
flex-basis:35%;
background-color: #1a69c5;
padding: 2%;
.header{
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8%;
}
.access{
    font-weight: 300;
    font-size: 13px;
}
.view{
    font-weight: 500;
    font-size: 14px;
    margin-top: 1.8%;   
    margin-left: 76%;
}
`;
const ActionNumber = styled.div``;

export const UpdateProfilePage = () => {
    return <>
        <ProfileDatailsOverlay>
        <ProfileImageContainer> <img src="https://img.icons8.com/ios/50/000000/user-male-circle.png"/></ProfileImageContainer>
        <DisplayContainer>
            <HeaderContainer> Add Name <BiPen/></HeaderContainer>
            <ShortDetailsSnap>
                <OneWrapper> 
                    <div>
                        <GoLocation/>
                        <span>Add Location</span>
                    </div>
                    <div>
                        <BiPhone/>
                        <span> Add Mobile Number</span>
                    </div>
                </OneWrapper>    
                <TwoWrapper>
                 <div>
                    <BsFillBriefcaseFill/>
                    <span>Fresher</span>
                 </div>
                    <div>
                        <AiOutlineMail/>
                        <span>test@gmail.com</span>
                    </div>
                </TwoWrapper>
                <ThreeWrapper>
                <div>
                    <BiBox/>
                    <span>Add availability to join</span>
                </div>
                </ThreeWrapper>
            </ShortDetailsSnap>
            <MissingDetailWrapper>
                <div className="smallfont">Profile Completed</div>
                <div> 40%</div>
            </MissingDetailWrapper>
            <DeterminateDiv></DeterminateDiv>
            <DeterminateLine></DeterminateLine>
        </DisplayContainer>
        <PendingActionsContainer>
        <div className="header">14 Pending Action(s)</div>
        <div className="access">Verify Mobile Number</div>
        <div className="access">Add Preferred Location</div>
        <div className="access">Add resume</div>
        <div className="view">VIEW ALL</div>
        </PendingActionsContainer>
        </ProfileDatailsOverlay>
    </>
}