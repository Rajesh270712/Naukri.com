import { SET_QUERY } from "./action";


export const queryReducer = (state = {searchQuery: ""}, {type, payload}) => {
    switch (type){
        case SET_QUERY : {
            return {
                ...state,
                searchQuery: payload
            }
        }
        default :{
            return state;
        }
    }
}