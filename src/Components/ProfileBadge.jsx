import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import { useSelector} from "react-redux";

const Button = styled.button`
color: white;
background-color: #4A90E2;
font-weight: 500;
${props => props.children == "Search" ? `height: 45px;
width: 20%;
// vertical-align:middle;
box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%), 0 1px 2px 0 rgb(0 0 0 / 10%), 0 2px 1px -2px rgb(0 0 0 / 20%);
border: none;
outline: 0;
text-transform: uppercase;
cursor: pointer;
font-size: 80%;
` : ""}
${props => props.children == "UPDATE PROFILE" ? `
height: 45px;
width: 80%;
margin: 0 10%;
` : ""}
`  


const ProfileBadge = styled.div`

position: absolute;
top: 85px;
left: 820px;
background-color: white;
// background-color: #cecece;
width: 100%;
max-width: 310px;
padding-top: 38px;
.profileNameDiv{
    text-align: center;
    color: black;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 17%;
}
.profileWrapperDiv{
    margin: auto 10%;
    display: flex;
    justify-content: space-between;
    span{
        font-size: 80%;
        color: #4a90e2;
        font-weight: 400;
    }
}
box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%), 0 1px 2px 0 rgb(0 0 0 / 10%), 0 2px 20px 0 rgb(0 0 0 / 20%);
`
const ProfileImageContainer = styled.div`
    position: absolute;
    top: 55px;
    left: 940px;
    z-index: 100;
    height: 60px;
    width: 60px;
    border-radius: 50px;
    background-color: teal;
    cursor: pointer;
`

const DeterminateDiv = styled.div`
    width: 30%;
    height: 5px;
    background-color: #4a90e2;
    margin-bottom: 0;
    margin: 0 10%;
    cursor: pointer;
`
const DeterminateLine = styled.div`
    width: 80%;
    height: 1px;
    background-color: #4a90e2;
    margin: 0 10%;
    cursor: pointer;
`
const PendingActions = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 26px  10% 20px 10%;
`
const MissingDetailsContainer = styled.div`
font-size: 13px
`

const AddDetailsContainer = styled.div`
color: #4a90e2;
cursor: pointer;
`
const ProfilePerformanceDiv = styled.div`
font-size: 13px;
margin: 20px 10% 10px 10%;
font-weight: 500;
`
const ProfileOverlay = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 10% 8% 10%;
    cursor: pointer;
`

const ProfileViewsWrapper = styled.div`
color: #4a90e2;
box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%), 0 1px 2px 0 rgb(0 0 0 / 10%), 0 2px 1px -2px rgb(0 0 0 / 20%);
`
const ProfileAppearanceNumber = styled.div`
font-size: 20px
`
const SearchAppearance = styled.div`
font-size: 13px;
font-weight: 500;
`
const RecruiterActionWrapper = styled.div`
color: #4a90e2;
box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%), 0 1px 2px 0 rgb(0 0 0 / 10%), 0 2px 1px -2px rgb(0 0 0 / 20%);
`
const RecruiterActionNumber = styled.div`
font-size: 20px;
`
const RecruiterAction = styled.div`
font-size: 13px;
font-weight: 500;
`

export const ProfileBadgeWrapper = () => {
    const { userdetails } = useSelector(state => state.userDetails);
    const Navigate = useNavigate();
    const handleClick = () => {
        Navigate("/UpdateProfilePage")
        console.log("clicked")
    }
    return <>
        {/* //  <ProfileImageContainer></ProfileImageContainer> */}
        <ProfileBadge>

            <div className="profileNameDiv">{userdetails.name ? userdetails.name : "Name Not Mentioned"}
            {console.log(userdetails)}
            </div>
            <div className="profileWrapperDiv">
                <span>Profile Completed</span>
                <span>40%</span>
            </div>
            <DeterminateDiv></DeterminateDiv>
            <DeterminateLine></DeterminateLine>
            <PendingActions>
                <MissingDetailsContainer>14 Details missing</MissingDetailsContainer>
                <AddDetailsContainer>ADD DETAILS</AddDetailsContainer>
            </PendingActions>
            <Button onClick={handleClick}>UPDATE PROFILE</Button>

            <ProfilePerformanceDiv>Profile Performance</ProfilePerformanceDiv>

            <ProfileOverlay>
                <ProfileViewsWrapper>
                    <ProfileAppearanceNumber>0</ProfileAppearanceNumber>
                    <SearchAppearance> Search Appearance</SearchAppearance>
                </ProfileViewsWrapper>
                <RecruiterActionWrapper>
                    <RecruiterActionNumber>0</RecruiterActionNumber>
                    <RecruiterAction>Recruiter Action</RecruiterAction>
                </RecruiterActionWrapper>
            </ProfileOverlay>
        </ProfileBadge>
    
    </>
}