import {  GET_INPUT_DATA, IS_ERROR, IS_LOADING, SORT_BY_CATEGORY, SORT_BY_JOB_TYPE, SORT_BY_LOCATION, SORT_BY_TECH_STACK } from "./action"



let initState ={
    searchData:[],
    loading:false,
    error:false
}


export const searchReducer =(state=initState, {type,payload}) => {
    switch (type){
        case GET_INPUT_DATA:{
            return{
                searchData:[...payload],
                loading:false,
                error:false
            }
        }
        case SORT_BY_LOCATION:{
            return{
                ...state,
                searchData : state.searchData.filter((job)=>(
                    job.candidate_required_location===payload ? [job] : null
                )),
                loading:false,
                error:false
            }
        }
        case SORT_BY_JOB_TYPE:{
            return{
                ...state,
                searchData : state.searchData.filter((job)=>(
                    job.job_type===payload ? [job] : null
                )),
                loading:false,
                error:false
            }
        }
        case SORT_BY_CATEGORY:{
            return{
                ...state,
                searchData : state.searchData.filter((job)=>(
                    job.category===payload ? [job] : null
                )),
                loading:false,
                error:false
            }
        }
        case SORT_BY_TECH_STACK:{
            return{
                ...state,
                searchData : state.searchData.filter((job)=>(
                    job.tags.map((jobTag)=> (
                        jobTag===payload ? [job] : null
                    ))
                    // job.category===payload ? [job] : null
                )),
                loading:false,
                error:false
            }
        }
        case IS_LOADING:{
            return{
                ...state,
                loading:payload,
                error:false
            }
        }
        case IS_ERROR:{
            return{
                ...state,
                loading:false,
                error:true
            }
        }
        default:
        return state
    }
}