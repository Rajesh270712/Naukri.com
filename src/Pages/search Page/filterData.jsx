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
  handleTechStackChange
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
            onChange={() => handleLocationChange('Worldwide')}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            World Wide
          </Checkbox>{' '}
          <br />
          <Checkbox
            onChange={() => handleLocationChange('UK')}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            UK
          </Checkbox>{' '}
          <br />
          <Checkbox
            onChange={() => handleLocationChange('Europe')}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            Europe
          </Checkbox>{' '}
          <br />
          <Checkbox
            onChange={() => handleLocationChange('Americas')}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            Americas
          </Checkbox>{' '}
          <br />
          <Popover placement="bottom-start">
            <PopoverTrigger>
              <Button p={0} bg="white" color="#4A90E2">
                + 4 More{' '}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <Checkbox
                  onChange={() => handleLocationChange('USA Only')}
                  border="1px grey"
                  spacing="1rem"
                  size="md"
                  colorScheme="blue"
                >
                  USA
                </Checkbox>{' '}
                <br />
                <Checkbox
                  onChange={() => handleLocationChange('India')}
                  border="1px grey"
                  spacing="1rem"
                  size="md"
                  colorScheme="blue"
                >
                  India
                </Checkbox>{' '}
                <br />
                <Checkbox
                  onChange={() => handleLocationChange('LATAM')}
                  border="1px grey"
                  spacing="1rem"
                  size="md"
                  colorScheme="blue"
                >
                  Latam
                </Checkbox>{' '}
                <br />
                <Checkbox
                  onChange={() => handleLocationChange('Slovenia')}
                  border="1px grey"
                  spacing="1rem"
                  size="md"
                  colorScheme="blue"
                >
                  Slovenia
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
            onChange={() => handleCategoryChange('QA')}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            Quality Engineer
          </Checkbox>{' '}
          <br />
          <Checkbox
            onChange={() => handleCategoryChange('Software Development')}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            Software Development
          </Checkbox>{' '}
          <br />
          <Checkbox
            onChange={() => handleCategoryChange('Design')}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            Design
          </Checkbox>{' '}
          <br />
        </Box>
      </Box>
      <Box>
        <Text className="filterHeading">Job Type</Text>
        <Box className="checkbox">
          <Checkbox
            onChange={() => handleJobTypeChange('full_time')}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            Full Time
          </Checkbox>{' '}
          <br />
          <Checkbox
            onChange={() => handleJobTypeChange('part_time')}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            Part Time
          </Checkbox>{' '}
          <br />
          <Checkbox
            onChange={() => handleJobTypeChange('contract')}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            Contract
          </Checkbox>{' '}
          <br />
        </Box>
      </Box>

      <Box>
        <Text className="filterHeading">Tech Stacks</Text>
        <Box className="checkbox">
          <Checkbox
            onChange={() => handleTechStackChange('react')}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            React
          </Checkbox>{' '}
          <br />
          <Checkbox
            onChange={() => handleTechStackChange('javascript')}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            Javascript
          </Checkbox>{' '}
          <br />
          <Checkbox
            onChange={() => handleTechStackChange('redux')}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            Redux
          </Checkbox>{' '}
          <br />
          <Checkbox
            onChange={() => handleTechStackChange('ruby')}
            border="1px grey"
            spacing="1rem"
            size="md"
            colorScheme="blue"
          >
            Ruby
          </Checkbox>{' '}
          <br />
          <Popover placement="bottom-start">
            <PopoverTrigger>
              <Button p={0} bg="white" color="#4A90E2">
                + 4 More{' '}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <Checkbox
                  onChange={() => handleTechStackChange('angular')}
                  border="1px grey"
                  spacing="1rem"
                  size="md"
                  colorScheme="blue"
                >
                  Angular
                </Checkbox>{' '}
                <br />
                <Checkbox
                  onChange={() => handleTechStackChange('python')}
                  border="1px grey"
                  spacing="1rem"
                  size="md"
                  colorScheme="blue"
                >
                  Python
                </Checkbox>{' '}
                <br />
                <Checkbox
                  onChange={() => handleTechStackChange('UI/UX')}
                  border="1px grey"
                  spacing="1rem"
                  size="md"
                  colorScheme="blue"
                >
                  UI/UX
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
