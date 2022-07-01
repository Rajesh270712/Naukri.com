import React from 'react';
import styled from 'styled-components';
import { SearchBar } from '../Components/SearchBar';
import { ProfileBadgeWrapper } from '../Components/ProfileBadge';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { BiWallet } from "react-icons/bi";
import { GoLocation } from 'react-icons/go';
import { FaPenNib } from 'react-icons/fa';
import { GrDocumentText } from 'react-icons/gr';
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../Redux/SearchQuery/action';

const UserHomePageDivWrapper = styled.div``;
const UserHomePageDiv = styled.div`
  background-color: white;
  background: url(https://static.naukimg.com/s/5/105/i/dashboardbg.png);
  height: 240px;
  position: relative;
`;
const SearchComponentWrapper = styled.div`
position: absolute;
top: 50px;
left: 200px;
color: white;
div{
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 5px;
}
`
const SearchComponent = styled.div`
height: 45px;
width: 600px;
`;
const Input = styled.input`
height: 45px;
width: 80%;
font-size: 12px;
padding-left: 1%;
border: none;
outline: 0;
vertical-align: bottom;
color: black;
&:focus{
    font-size: 16px;
}
`
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
const JobsDiv = styled.div`
  margin-left: 200px;
  margin-bottom: 0px;
  margin-top: 2%;
  font-weight: 500;
`;
const JobsContainer = styled.div`
  margin-left: 200px;
  width: 600px;
  padding: 1%;
  svg {
    display: inline-block;
    vertical-align: middle;
  }
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%), 0 1px 2px 0 rgb(0 0 0 / 10%), 0 2px 20px 0 rgb(0 0 0 / 20%);
`;
const RecommendedJobsContainer = styled.div`
  font-weight: 600;
  padding-top: 30px;
  height: 60px;
  vertical-align: center;
  
`;
const RequirementsContainer = styled.div`
  font-weight: 500;
  padding-left: 2%;
  color: #666;
`;
const CompanyContainer = styled.div`
font-size: 13px;
color:#666;
padding-left: 2%;
`;
const ExperienceContainer = styled.div`
font-size: 13px;
color:#666;
margin-top: 2%;
`;
const LanguageContainer = styled.div`
font-size: 13px;
color:#666;
margin-top: 1%;
`;
const ExtraDetailsDiv = styled.div`
font-size: 13px;
color:#666;
margin-top: 1%;
`;
const SalaryContainer = styled.div`
font-size: 13px;
color:#666;
margin-top: 1%;
margin-bottom: 3%;
`


const CustomJobsWrapper = styled.div`
margin-top: 3%;
margin-left: 200px;
  width: 600px;
  padding: 1%;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%), 0 1px 2px 0 rgb(0 0 0 / 10%), 0 2px 20px 0 rgb(0 0 0 / 20%);
  .newJobs{
    font-weight: 500;
    margin-top: 2%;
    margin-bottom: 2%;
  }
  .customalerts{
    text-align:center;
    text-tranform: uppercase;
    color: #4a90e2;
  }
  .moreinfo{
    text-align:center;
    color: #666;
  }
`
const SavedJobWrapper = styled.div`
    width: 300px;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%), 0 1px 2px 0 rgb(0 0 0 / 10%), 0 2px 20px 0 rgb(0 0 0 / 20%);
    margin-left: 200px;
    padding: 20px;
    height: 200px;
    margin-top: 40px;
    `
    const Sheader = styled.div`
font-size: 14px;
color: #666;
font-weight: 700;
    `;
    const Sdetails = styled.div`
    font-size: 13px;
    color: #666;
    font-weight: 500;
    margin-top: 20px;
    `
    const Slink = styled.div`
    color: #4a90e2;
    margin-top: 20px;
    text-align:right;
    cursor: pointer;
    `;




export const UserHomePage = () => {
    const Navigate = useNavigate();
    const { searchQuery } = useSelector(state => state);
    
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = React.useState("");

    const handleClick = () => {
        dispatch(setQuery(inputValue));        
        Navigate("/SearchPage");
    }
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleSave = () => {
      Navigate("/savedJob")
    }
  return (
    <UserHomePageDivWrapper>
      <UserHomePageDiv>
      <SearchComponentWrapper>
            <div>Search Jobs</div>
            <SearchComponent>
                <Input type="text" placeholder="Search Jobs by Skills, Designation, Companies" value={inputValue} onChange = {handleInputChange}/>
                <Button inputButton onClick={handleClick}>Search</Button>
            </SearchComponent>
        </SearchComponentWrapper>
        <ProfileBadgeWrapper />
      </UserHomePageDiv>
      <JobsDiv>JOBS</JobsDiv>

      <JobsContainer>
        <RecommendedJobsContainer>
          06 New Recommended Job(s)
        </RecommendedJobsContainer>
        <RequirementsContainer>
          Wanted Work from Home internet researchers{' '}
        </RequirementsContainer>
        <CompanyContainer>Techvv Opersource</CompanyContainer>
        <ExperienceContainer>
          {' '}
          <BsFillBriefcaseFill /> <span>0-0 years</span> <GoLocation />{' '}
          <span>
            <b>Remote</b>
          </span>{' '}
        </ExperienceContainer>
        <LanguageContainer>
          <FaPenNib />{' '}
          <span>
            English,Google,English Grammar,Search Engine,English Language
          </span>
        </LanguageContainer>
        <ExtraDetailsDiv>
          {' '}
          <GrDocumentText />{' '}
          <span>
            JDTechvv is looking for work from home internet researchers100%
            remote work from home
          </span>
        </ExtraDetailsDiv>
        <SalaryContainer>
          <BiWallet /> <span>200,000 - 250,000 PA</span>
        </SalaryContainer>
      </JobsContainer>

      <SavedJobWrapper>
        <Sheader>
          SAVED JOBS
        </Sheader>
        <Sdetails>
          You can view saved jobs here
        </Sdetails>
        <Slink onClick={handleSave}> 
          VIEW ALL...
        </Slink>
      </SavedJobWrapper>
      <CustomJobsWrapper>
        <div className='newJobs'>New Jobs in My Job Alerts</div>
        <div className='customalerts'>CREATE CUSTOM JOB ALERTS</div>
        <div className='moreinfo'>Stay informed about the latest jobs for you</div>
      </CustomJobsWrapper>
    </UserHomePageDivWrapper>
  );
};
