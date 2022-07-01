import { SET_USER } from "./action";


export const userReducer = (state = {userdetails: {}}, {type, payload}) => {
    switch (type){
        case SET_USER : {
            return {
                ...state,
                userdetails: payload
            }
        }
        default :{
            return state;
        }
    }
}