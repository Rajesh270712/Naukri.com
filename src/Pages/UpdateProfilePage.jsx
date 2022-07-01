import React from 'react';
import styled from 'styled-components';
import { ProfileDetails } from '../Components/ProfileDetails';
import { ResumeOverlay } from '../Components/ResumeOverlay';
import { useDispatch } from 'react-redux/es/exports';
import { setEducation } from '../Redux/Education/action';
import { useSelector } from 'react-redux/es/hooks/useSelector';


const UserDetailsOverlay = styled.div`
  display: flex;
  margin-left: 14%;
  margin-right: 14%;
  gap: 20px;
  font-family: Roboto, sans-serif;
  margin-top: 2%;
`;
const LinksWrapper = styled.div`
  position: sticky;
  top: 500px;
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
  padding: 2%;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%), 0 1px 2px 0 rgb(0 0 0 / 10%),
    0 2px 20px 0 rgb(0 0 0 / 20%);
  div {
    display: flex;
    justify-content: space-between;
  }
  .header {
    margin-top: 4%;
    font-size: 20px;
    color: #666;
    font-weight: 600;
    border-bottom: 1px solid #eee;
    padding-bottom: 4%;
    margin-bottom: 4%;
  }
`;
const LineWrapper = styled.div`
  margin-top: 4%;
  margin-bottom: 4%;
  .link {
    color: #4a90e2;
  }
  .item {
    font-size: 13px;
    color: #666;
    cursor: pointer;
  }
`;
const UserSummaryWrapper = styled.div`
  flex-basis: 75%;

  font-family: Roboto, sans-serif;
`;

// ------------------------
const EducationWrapper = styled.div`
margin-top: 4%;
padding: 20px;
box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%), 0 1px 2px 0 rgb(0 0 0 / 10%), 0 2px 20px 0 rgb(0 0 0 / 20%);
button{
    color: white;
    display: inline-block;
    background-color: #4A90E2;
    height: 40px;
    width: 15%;
    margin-top: 3%;
    border: none;
}
select{
    height: 40px;
    width: 40%;
    border: 1p solid black;
    margin-left: 1%;
    outline: none;
}
label{
    font-size: 14px;
color: #666;
font-weight: 500;
}
`;
const Header = styled.div`
font-size: 20px;
color: #666;
font-weight: 700;
`;

export const UpdateProfilePage = () => {
    
    const dispatch = useDispatch();
    const [selected, setSelected]  = React.useState("");
    const handleChange = (e) => {
        setSelected(e.target.value);
        
    }
    const handleClick = () =>{
        dispatch(setEducation(selected));
    }
    return (
        <>
            <ProfileDetails />

            <UserDetailsOverlay>
                <LinksWrapper>
                    <div className="header"> Quick Links</div>
                    <LineWrapper>
                        <span className="item">Resume</span>
                        <span className="link">UPLOAD</span>
                    </LineWrapper>
                    <LineWrapper>
                        <span className="item">Resume Headline</span>
                        <span className="link">ADD</span>
                    </LineWrapper>
                    <LineWrapper>
                        <span className="item">Key Skills</span>
                        <span className="link">ADD</span>
                    </LineWrapper>
                    <LineWrapper>
                        <span className="item">Education</span>
                        <span className="link">ADD</span>
                    </LineWrapper>
                    <LineWrapper>
                        <span className="item">IT Skills</span>
                        <span className="link">ADD</span>
                    </LineWrapper>
                    <LineWrapper>
                        <span className="item">Projects</span>
                        <span className="link">ADD</span>
                    </LineWrapper>
                    <LineWrapper>
                        <span className="item">Profile Summary</span>
                        <span className="link">ADD</span>
                    </LineWrapper>
                    <LineWrapper>
                        <span className="item">Accomplishments</span>
                    </LineWrapper>
                    <LineWrapper>
                        <span className="item">Career Profile</span>
                    </LineWrapper>
                </LinksWrapper>
                <UserSummaryWrapper>
                    <ResumeOverlay />
                    <EducationWrapper>
                        <Header>Educational Details</Header>
                        <label> Select Education: {" "}
                            <select name="education" id="education" onChange={handleChange}>
                            <option value="" disabled defaultValue={true}>Select Education</option>
                                <option value="high"> 10th</option>
                                <option value="inter">12th</option>
                                <option value="BSC">BSC</option>
                                <option value="Btech"> B.Tech</option>
                                <option value="BA">BA</option>
                                <option value="BCOM">BCOM</option>
                                <option value="MA">MA</option>
                                <option value="M.Tech">M.Tech</option>
                                <option value="M.Com">M.Com</option>
                            </select>
                        </label>
                        <button onClick={handleClick}>Save</button>
                    </EducationWrapper>
                </UserSummaryWrapper>
            </UserDetailsOverlay>
        </>
    );
};
