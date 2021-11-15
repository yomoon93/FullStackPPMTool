import {GET_PROJECTS} from "../../action/types"

const initialState = {
    projects:[],
    project: {}
}
export default function(state = initialState, action){
    switch(action.types){
    case GET_PROJECTS:
    return{
        ...state, 
        projects:action.payload
    }
    default:
    return state
    }
}