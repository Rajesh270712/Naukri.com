import React from 'react';
import styled from 'styled-components';
import { SearchBar } from '../Components/SearchBar';
import { ProfileBadgeWrapper } from '../Components/ProfileBadge';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { BiWallet } from "react-icons/bi";
import { GoLocation } from 'react-icons/go';
import { FaPenNib } from 'react-icons/fa';
import { GrDocumentText } from 'react-icons/gr';

const UserHomePageDivWrapper = styled.div``;
const UserHomePageDiv = styled.div`
  background-color: white;
  background: url(https://static.naukimg.com/s/5/105/i/dashboardbg.png);
  height: 240px;
  position: relative;
`;

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
export const UserHomePage = () => {
  return (
    <UserHomePageDivWrapper>
      <UserHomePageDiv>
        <SearchBar />
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

      <CustomJobsWrapper>
        <div className='newJobs'>New Jobs in My Job Alerts</div>
        <div className='customalerts'>CREATE CUSTOM JOB ALERTS</div>
        <div className='moreinfo'>Stay informed about the latest jobs for you</div>
      </CustomJobsWrapper>
    </UserHomePageDivWrapper>
  );
};
