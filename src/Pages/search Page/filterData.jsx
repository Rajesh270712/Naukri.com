import {
  Box,
  Text,
  Checkbox,
  Button,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Popover,
  PopoverCloseButton,
  PopoverArrow,
} from '@chakra-ui/react';
import './filterData.css';

const FilterData = ({
  handleLocationChange,
  handleJobTypeChange,
  handleCategoryChange,
  handleTechStackChange,
}) => {
  return (
    <Box className="filterContainer">
      <Box>
        {' '}
        <Text className="filterHeading"> All Filters</Text>{' '}
      </Box>
      <Box>
        <Text className="filterHeading">Location</Text>
        <Box className="checkbox">
          <Checkbox
            onChange={e => handleLocationChange('Worldwide', e)}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            <Text fontSize="14px">World Wide</Text>
          </Checkbox>{' '}
          <br />
          <Checkbox
            onChange={e => handleLocationChange('UK', e)}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            <Text fontSize="14px">UK</Text>
          </Checkbox>{' '}
          <br />
          <Checkbox
            onChange={e => handleLocationChange('Europe', e)}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            <Text fontSize="14px">Europe</Text>
          </Checkbox>{' '}
          <br />
          <Checkbox
            onChange={e => handleLocationChange('Americas', e)}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            <Text fontSize="14px">Americas</Text>
          </Checkbox>{' '}
          <br />
          <Popover placement="bottom-start">
            <PopoverTrigger>
              <Button p={0} fontSize="15px" bg="white" color="#4A90E2">
                + 4 More{' '}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <Checkbox
                  onChange={e => handleLocationChange('USA Only', e)}
                  border="1px grey"
                  spacing="1rem"
                  size="md"
                  colorScheme="blue"
                >
                  <Text fontSize="14px">USA</Text>
                </Checkbox>{' '}
                <br />
                <Checkbox
                  onChange={e => handleLocationChange('India', e)}
                  border="1px grey"
                  spacing="1rem"
                  size="md"
                  colorScheme="blue"
                >
                  <Text fontSize="14px">India</Text>
                </Checkbox>{' '}
                <br />
                <Checkbox
                  onChange={e => handleLocationChange('LATAM', e)}
                  border="1px grey"
                  spacing="1rem"
                  size="md"
                  colorScheme="blue"
                >
                  <Text fontSize="14px">Latam</Text>
                </Checkbox>{' '}
                <br />
                <Checkbox
                  onChange={e => handleLocationChange('Slovenia', e)}
                  border="1px grey"
                  spacing="1rem"
                  size="md"
                  colorScheme="blue"
                >
                  <Text fontSize="14px">Slovenia</Text>
                </Checkbox>{' '}
                <br />
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      </Box>
      <Box>
        <Text className="filterHeading">Role Category</Text>
        <Box className="checkbox">
          <Checkbox
            onChange={e => handleCategoryChange('QA', e)}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            <Text fontSize="14px">Quality Engineer</Text>
          </Checkbox>{' '}
          <br />
          <Checkbox
            onChange={e => handleCategoryChange('Software Development', e)}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            <Text fontSize="14px">Software Development</Text>
          </Checkbox>{' '}
          <br />
          <Checkbox
            onChange={e => handleCategoryChange('Design', e)}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            <Text fontSize="14px">Design</Text>
          </Checkbox>{' '}
          <br />
        </Box>
      </Box>
      <Box>
        <Text className="filterHeading">Job Type</Text>
        <Box className="checkbox">
          <Checkbox
            onChange={e => handleJobTypeChange('full_time', e)}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            <Text fontSize="14px">Full Time</Text>
          </Checkbox>{' '}
          <br />
          <Checkbox
            onChange={e => handleJobTypeChange('part_time', e)}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            <Text fontSize="14px">Part Time</Text>
          </Checkbox>{' '}
          <br />
          <Checkbox
            onChange={e => handleJobTypeChange('contract', e)}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            <Text fontSize="14px">Contract</Text>
          </Checkbox>{' '}
          <br />
        </Box>
      </Box>

      <Box>
        <Text className="filterHeading">Tech Stacks</Text>
        <Box className="checkbox">
          <Checkbox
            onChange={e => handleTechStackChange('react', e)}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            <Text fontSize="14px">React</Text>
          </Checkbox>{' '}
          <br />
          <Checkbox
            onChange={e => handleTechStackChange('javascript', e)}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            <Text fontSize="14px">Javascript</Text>
          </Checkbox>{' '}
          <br />
          <Checkbox
            onChange={e => handleTechStackChange('redux', e)}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            <Text fontSize="14px">Redux</Text>
          </Checkbox>{' '}
          <br />
          <Checkbox
            onChange={e => handleTechStackChange('ruby', e)}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            <Text fontSize="14px">Ruby</Text>
          </Checkbox>{' '}
          <br />
          <Popover placement="bottom-start">
            <PopoverTrigger>
              <Button p={0} fontSize="15px" bg="white" color="#4A90E2">
                + 4 More{' '}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <Checkbox
                  onChange={e => handleTechStackChange('angular', e)}
                  border="1px grey"
                  spacing="1rem"
                  size="md"
                  colorScheme="blue"
                >
                  <Text fontSize="14px">Angular</Text>
                </Checkbox>{' '}
                <br />
                <Checkbox
                  onChange={e => handleTechStackChange('python', e)}
                  border="1px grey"
                  spacing="1rem"
                  size="md"
                  colorScheme="blue"
                >
                  <Text fontSize="14px">Python</Text>
                </Checkbox>{' '}
                <br />
                <Checkbox
                  onChange={e => handleTechStackChange('UI/UX', e)}
                  border="1px grey"
                  spacing="1rem"
                  size="md"
                  colorScheme="blue"
                >
                  <Text fontSize="14px">UI/UX</Text>
                </Checkbox>{' '}
                <br />
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      </Box>
      <h1></h1>
    </Box>
  );
};

export default FilterData;
