export const GET_INPUT_DATA = "GET_INPUT_DATA";


export const getInputData =(payload) => {
    return{
        type:GET_INPUT_DATA,
        payload
    }
}