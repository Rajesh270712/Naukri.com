import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInputData } from '../../Redux/search Page/action';
import { Box, Heading, Text ,HStack} from '@chakra-ui/react';
import './searchPage.css';

export const SearchPage = () => {
    const searchInput = 'management';
  const { searchData } = useSelector(state => state);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchSearchInput = async () => {
      try {
        let fetchData = await fetch(
          `https://remotive.com/api/remote-jobs?search=${searchInput}&limit=10`
        );
        let result = await fetchData.json();
        // console.log(result.jobs)
        dispatch(getInputData(result.jobs));
      } catch (error) {
        console.log(error);
      }
    };
    fetchSearchInput();
  }, []);
  console.log(searchData);
  return (
    <div className="searchResultContainer">
      {searchData.map(job => (
        <Box className="jobBox" key={job.id}>
          <Heading as="h1">{job.title}</Heading>
          <HStack className='companyName' spacing="8px" >
          <Text >{job.company_name}  </Text>
          <Text>-</Text>
          <Text>3.7 ⭐</Text>

          </HStack>
          <HStack className='searchPara' spacing="20px" >
            <Text>3-5 Yrs</Text>
            <Text>{job.salary === '' ? 'Not Disclosed' : job.salary}</Text>
            <Text>{job.candidate_required_location}</Text>
          </HStack>
          
          <HStack className='searchPara' margin="10px 0px 4px 0px" spacing="20px" >{
            job.tags.map((tag,index)=>(
                (index<5 ? <Text>{tag}      </Text> : index==5 ?  <Text>{tag}    </Text> : null )
            ))
            }</HStack>
          {/* <Text>{job.description}</Text> */}
        </Box>
      ))}
    </div>
  );
};
