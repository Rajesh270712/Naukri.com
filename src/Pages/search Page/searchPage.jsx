import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInputData, sortByCategory, sortByJobType, sortByLocation } from '../../Redux/search Page/action';
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
  function handleJobTypeChange(location){
    dispatch(getInputData(searchResult));
    dispatch(sortByJobType(location))
  
   }
  function handleCategoryChange(location){
    dispatch(getInputData(searchResult));
    dispatch(sortByCategory(location))
  
   }

  return (
    <Box className="searchResultContainer">
      <div>
       <FilterData handleCategoryChange={handleCategoryChange} handleLocationChange={handleLocationChange} handleJobTypeChange={handleJobTypeChange} />
      </div>
      
      <GridItem>
      {searchData.map(job => (
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
            {job.tags.map((tag, index) =>
              index < 5 ? (
                <Text>{tag.charAt(0).toUpperCase() + tag.slice(1)} </Text>
              ) : index === 5 ? (
                <Text>{tag.charAt(0).toUpperCase() + tag.slice(1)} </Text>
              ) : null
            )}
          </HStack>
          
        </div>
      ))}
      </GridItem>
    </Box>
  );
};
