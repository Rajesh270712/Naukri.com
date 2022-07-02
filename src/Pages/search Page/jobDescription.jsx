import { BsBriefcase } from 'react-icons/bs';
import { Icon } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import {  useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GoLocation } from 'react-icons/go';
import { BiMoney } from 'react-icons/bi';
import { Box, Heading, Text, HStack, Button } from '@chakra-ui/react';
import { SideTimePass } from './sideAdd';
import "./jobDescription.css"
const JobDescription = () => {
  const { id } = useParams();
  const { searchData } = useSelector(state => state.search);

  let temp = searchData.filter(job => (job.id == id ? { ...job } : null));
    function applyToSite(url)
    {
        window.open(url,"_blank");
    }

    const saveJob = (job) =>{
      let data = {
        id:job.id,
        title:job.title,
        company:job.company_name,
        location:job.candidate_required_location,
        salary:job.salary
      }
      fetch(`https://jsonserverlive.herokuapp.com/savedJobs`, {
        method:"POST",
        body:JSON.stringify(data),
        headers:{
          "Content-Type":"Application/json"
        }
      })
    }
  console.log(process.env.REACT_APP_BASE_URL);
  return (
    <>
        <Box className='topBlueBar'></Box>
    <HStack alignItems="top" className='mainContainer' >
      {temp.map(job => (
        <Box className='companyInfo'  key={job.id}>
          <Box  className='topJobSection' >
            <Heading  as="h1">{job.title}</Heading>
            <Text className='companyName' >{job.company_name} 3.7 <StarIcon w={3} marginBottom={1} color="#feaa00" />{' '} </Text>
            <Text className='searchPara' >
              {' '}
              <Icon as={BsBriefcase} /> 3 - 5 years
            </Text>
            <HStack justifyContent="space-between" >
            <Box>
            <Text className='searchPara' > <Icon as={BiMoney} /> {job.salary === '' ? 'Not Disclosed' : job.salary}</Text>

            <Text className='searchPara' >
              {' '}
              <Icon as={GoLocation} /> {job.candidate_required_location}
            </Text>
            </Box>
            <Box>
                <Button onClick={()=>saveJob(job)} variant='outline'colorScheme='blue' >Saved</Button>
                <Button onClick={()=>applyToSite(job.url)} colorScheme='blue' >APPLY ON COMPANY SITE</Button>
            </Box>
            </HStack>
          </Box>

          <Box className='description' >
            <Text  >Job Description</Text>
            <div dangerouslySetInnerHTML={{ __html: job.description }} />
          </Box>

        </Box>
      ))}
      <Box>
      <SideTimePass/>

      </Box>
    </HStack>
    </>
  );
};

export default JobDescription;
