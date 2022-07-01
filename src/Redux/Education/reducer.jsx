import { SET_EDUCATION} from "./action";


export const educationReducer = (state = {education: ""}, {type, payload}) => {
    switch (type){
        case SET_EDUCATION : {
            return {
                ...state,
                education: payload
            }
        }
        default :{
            return state;
        }
    }
}