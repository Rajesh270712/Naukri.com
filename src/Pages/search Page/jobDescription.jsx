import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";


const JobDescription =() => {
   const {id} = useParams()
    const [jobData, setJobData] = useState();
    const { searchData } = useSelector(state => state);
    useEffect(()=>{

    },[])

    return(
        <div>
            
            <Box>

            </Box>
        </div>
    )
}

export default JobDescription;