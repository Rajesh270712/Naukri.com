import { GET_INPUT_DATA, SORT_BY_CATEGORY, SORT_BY_JOB_TYPE, SORT_BY_LOCATION } from "./action"

let initState ={
    searchData:[]
}

export const searchReducer =(state=initState, {type,payload}) => {
    switch (type){
        case GET_INPUT_DATA:{
            return{
                searchData:[...payload]
            }
        }
        case SORT_BY_LOCATION:{
            return{
                ...state,
                searchData : state.searchData.filter((job)=>(
                    job.candidate_required_location===payload ? [job] : null
                ))
            }
        }
        case SORT_BY_JOB_TYPE:{
            return{
                ...state,
                searchData : state.searchData.filter((job)=>(
                    job.job_type===payload ? [job] : null
                ))
            }
        }
        case SORT_BY_CATEGORY:{
            return{
                ...state,
                searchData : state.searchData.filter((job)=>(
                    job.category===payload ? [job] : null
                ))
            }
        }
        default:
        return state
    }
}