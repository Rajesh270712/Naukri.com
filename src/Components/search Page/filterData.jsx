import { Box ,Text,Checkbox} from "@chakra-ui/react"
import "./filterData.css"
const FilterData = ({handleLocationChange,handleJobTypeChange, handleCategoryChange}) => {
   
    return(
        <Box className="filterContainer">
            <Box > <Text className="filterHeading" > All Filters</Text> </Box>
            <Box > 
                <Text className="filterHeading" >Location</Text>
                <Box className="checkbox" >
                <Checkbox onChange={()=>handleLocationChange("Worldwide")} border="1px grey" spacing="1rem" size='md' colorScheme='blue'>World Wide</Checkbox> <br />
                <Checkbox onChange={()=>handleLocationChange("Americas")} border="1px grey" spacing="1rem" size='md' colorScheme='blue'>Americas</Checkbox> <br />
                <Checkbox onChange={()=>handleLocationChange("UK")} border="1px grey" spacing="1rem"  size='md' colorScheme='blue'>UK</Checkbox> <br />
                <Checkbox onChange={()=>handleLocationChange("Europe")} border="1px grey" spacing="1rem"  size='md' colorScheme='blue'>Europe</Checkbox>
                </Box>
            </Box>
            <Box > 
                <Text className="filterHeading" >Category</Text>
                <Box className="checkbox" >
                <Checkbox onChange={()=>handleCategoryChange("QA")} border="1px grey" spacing="1rem" size='md' colorScheme='blue'>Quality Engineer</Checkbox> <br />
                <Checkbox onChange={()=>handleCategoryChange("Software Development")} border="1px grey" spacing="1rem" size='md' colorScheme='blue'>Software Development</Checkbox> <br />
                <Checkbox onChange={()=>handleCategoryChange("Design")} border="1px grey" spacing="1rem"  size='md' colorScheme='blue'>Design</Checkbox> <br />
                </Box>
            </Box>
            <Box > 
                <Text className="filterHeading" >Job Type</Text>
                <Box className="checkbox" >
                <Checkbox onChange={()=>handleJobTypeChange("full_time")} border="1px grey" spacing="1rem" size='md' colorScheme='blue'>Full Time</Checkbox> <br />
                <Checkbox onChange={()=>handleJobTypeChange("part_time")} border="1px grey" spacing="1rem" size='md' colorScheme='blue'>Part Time</Checkbox> <br />
                <Checkbox onChange={()=>handleJobTypeChange("contract")} border="1px grey" spacing="1rem"  size='md' colorScheme='blue'>Contract</Checkbox> <br />
                </Box>
            </Box>
            <h1></h1>
        </Box>
    )
}


export default FilterData;