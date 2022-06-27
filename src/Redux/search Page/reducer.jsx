import { GET_INPUT_DATA } from "./action"

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
        default:
        return state
    }
}