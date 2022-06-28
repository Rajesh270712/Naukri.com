import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInputData, sortByCategory, sortByJobType, sortByLocation, sortByTechStack } from '../../Redux/search Page/action';
import { Box, Heading, Text, HStack, Grid,GridItem, VStack } from '@chakra-ui/react';
import moment from 'moment';
import FilterData from './filterData';
import './searchPage.css';
export const SearchPage = () => {
  const searchInput = 'frontend';
  const [searchResult, setSearchResult]= useState([])
  const { searchData } = useSelector(state => state);
  
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchSearchInput = async () => {
      try {
        let fetchData = await fetch(
          `https://remotive.com/api/remote-jobs?search=${searchInput}&limit=100`
        );
        let result = await fetchData.json();
        setSearchResult(result.jobs)
        dispatch(getInputData(result.jobs));
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchSearchInput();
  }, []);

 
  function handleLocationChange(location){
    dispatch(getInputData(searchResult));
    dispatch(sortByLocation(location))
  
   }
  function handleJobTypeChange(JobType){
    dispatch(getInputData(searchResult));
    dispatch(sortByJobType(JobType))
  
   }
  function handleCategoryChange(Category){
    dispatch(getInputData(searchResult));
    dispatch(sortByCategory(Category))
  
   }
  function handleTechStackChange(TechStack){
    dispatch(getInputData(searchResult));
    dispatch(sortByTechStack(TechStack))
  
   }

  return (
    <Box className="searchResultContainer">

      <div>
       <FilterData handleTechStackChange={handleTechStackChange} handleCategoryChange={handleCategoryChange} handleLocationChange={handleLocationChange} handleJobTypeChange={handleJobTypeChange} />
      </div>
      
      <GridItem>
        <Text ml={2} className="searchPara"  > 1 - 20 of 101 {searchInput} Jobs</Text>
      {searchData.slice(0,15).map(job => (
        <div key={job.id} className="jobBox">
          <Heading as="h1">{job.title}</Heading>
          <HStack key={job.id} className="companyName" spacing="8px">
            <Text>{job.company_name} </Text>
            <Text>-</Text>
            <Text>3.7 ⭐</Text>
          </HStack>
          <HStack  className="searchPara" spacing="20px">
            <Text>3-5 Yrs</Text>
            <Text>{job.salary === '' ? 'Not Disclosed' : job.salary}</Text>
            <Text>{job.candidate_required_location}</Text>
          </HStack>

          <HStack
            className="searchPara"
            margin="10px 0px 4px 0px"
            spacing="20px"
            
          >
            {job.tags.slice(0,7).map((tag, index) =>
              
                <Text>·  {tag.charAt(0).toUpperCase() + tag.slice(1)} </Text>
              
            )}
          </HStack>
          
        </div>
      ))}
      </GridItem>
      <GridItem marginLeft="16%" >
        <Box >

        <h1>add</h1>
        </Box>
      </GridItem >
    </Box>
  );
};
