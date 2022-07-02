import { Center, Icon, SkeletonText } from '@chakra-ui/react';
import { BsBriefcase } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { GrDocumentText } from 'react-icons/gr';
import {StarIcon } from '@chakra-ui/icons';
import { Box, Heading, Text, HStack, GridItem, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SavedJob =() => {
    const navigate= useNavigate()
    function handleClick(id) {
        navigate(`/jobDescription/${id}`);
      }
          const [jobData, setJobData] = useState([])
          useEffect(()=>{
              fetch(`https://jsonserverlive.herokuapp.com/savedJobs`)
              .then((res)=>res.json())
              .then(res=>setJobData(res))
          },[])
return(
            <>
        <img style={{width:"100%"}} src='https://static.naukimg.com/s/5/105/i/mnjbg.png' />
    <div  style={{margin:"50px auto", width:"50%"}} >
            {
              jobData.map(job => (
                    <div
                      onClick={() => handleClick(job.id)}
                      key={job.id}
                      
                      className="jobBox"
                      
                    >
                      <Heading as="h1">{job.title}</Heading>
                      <HStack key={job.id} className="companyName" spacing="8px">
                        <Text>{job.company} </Text>
                        <Text>-</Text>
                        <Text>
                          3.7 <StarIcon w={3} marginBottom={1} color="#feaa00" />{' '}
                        </Text>
                      </HStack>
                      <HStack className="searchPara" spacing="20px">
                        <Text>
                          {' '}
                          <Icon as={BsBriefcase} /> 3-5 Yrs
                        </Text>
                        <Text> ₹ {job.salary === '' ? 'Not Disclosed' : job.salary}</Text>
                        <Text>
                          {' '}
                          <Icon as={GoLocation} /> {job.location}
                        </Text>
                      </HStack>
          
                      <Text mt={1} className="searchPara" noOfLines={1}>
                        <Icon as={GrDocumentText} /> Bachelor / Master degree in Computer
                        Science.
                      </Text>
                      </div>
                ))
            }
        </div>
                  </>
    )
}

export default SavedJob;