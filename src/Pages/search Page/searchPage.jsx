import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '@chakra-ui/react'
import { BsBriefcase } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { GrDocumentText } from 'react-icons/gr'
import { StarIcon } from '@chakra-ui/icons'
import {
  getInputData,
  sortByCategory,
  sortByJobType,
  sortByLocation,
  sortByTechStack,
} from '../../Redux/search Page/action';
import {
  Box,
  Heading,
  Text,
  HStack,
  Grid,
  GridItem,
  VStack,
  Button,
} from '@chakra-ui/react';
import FilterData from './filterData';
import './searchPage.css';
export const SearchPage = () => {
  const searchInput = 'frontend';
  const [searchResult, setSearchResult] = useState([]);
  const { searchData } = useSelector(state => state);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchSearchInput = async () => {
      try {
        let fetchData = await fetch(
          `https://remotive.com/api/remote-jobs?search=${searchInput}&limit=100`
        );
        let result = await fetchData.json();
        setSearchResult(result.jobs);
        dispatch(getInputData(result.jobs));
      } catch (error) {
        console.log(error);
      }
    };

    fetchSearchInput();
  }, []);

  function handleLocationChange(location,e) {
    dispatch(getInputData(searchResult))
    (e.target.checked ? dispatch(sortByLocation(location)) : null)
    
    
  }
  function handleJobTypeChange(JobType,e) {
    dispatch(getInputData(searchResult))
    (e.target.checked ? dispatch(sortByJobType(JobType)) : null)
    
  }
  function handleCategoryChange(Category,e) {
    dispatch(getInputData(searchResult))
    (e.target.checked ? dispatch(sortByCategory(Category)) : null)
    
  }
  function handleTechStackChange(TechStack,e) {
    dispatch(getInputData(searchResult))
    (e.target.checked ? dispatch(sortByTechStack(TechStack)) : null)
    
  }


  return (
    <Box className="searchResultContainer">
      <div>
        <FilterData
          handleTechStackChange={handleTechStackChange}
          handleCategoryChange={handleCategoryChange}
          handleLocationChange={handleLocationChange}
          handleJobTypeChange={handleJobTypeChange}
        />
      </div>

      <GridItem>
        <Text ml={2} className="searchPara">
          {' '}
          1 - 20 of 101 {searchInput} Jobs
        </Text>
        {searchData.slice(0, 15).map(job => (
          <div key={job.id} className="jobBox">
            <Heading as="h1">{job.title}</Heading>
            <HStack key={job.id} className="companyName" spacing="8px">
              <Text>{job.company_name} </Text>
              <Text>-</Text>
              <Text>3.7  <StarIcon w={3} marginBottom={1} color="#feaa00" /> </Text>
            </HStack>
            <HStack className="searchPara" spacing="20px">
              <Text> <Icon  as={BsBriefcase} /> 3-5 Yrs</Text>
              <Text> ₹ {job.salary === '' ? 'Not Disclosed' : job.salary}</Text>
              <Text> <Icon as={GoLocation} /> {job.candidate_required_location}</Text>
            </HStack>
            <Text mt={1} className="searchPara" noOfLines={1}>
             
              <Icon as={GrDocumentText} /> {" "} Bachelor / Master degree in Computer Science.
            </Text>

            <HStack
              className="searchPara"
              margin="10px 0px 4px 0px"
              spacing="20px"
            >
              {job.tags.slice(0, 7).map((tag, index) => (
                <Text key={index} > {tag.charAt(0).toUpperCase() + tag.slice(1)} </Text>
              ))}
            </HStack>
          </div>
        ))}
      </GridItem>
      <GridItem >
        <Box className='naukriAdd' >
          <img
            src="https://static.naukimg.com/s/7/109/assets/images/fast-forward.15f4198a.png"
            alt=""
          />
          <Text fontSize="14px"   >Get 3X more profile views from meesho recruiters</Text>
          <Text fontSize="12px" >Increase your chances of callback with Naukri FastForward</Text>
          <Button colorScheme="blue" variant="outline">
            Know More
          </Button>
        </Box>
      </GridItem>
    </Box>
  );
};
