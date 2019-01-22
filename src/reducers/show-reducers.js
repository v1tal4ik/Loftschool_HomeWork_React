import {
    showRequest,
    showSuccess,
    showFailure
} from '../actions.js';

const initialState = {
    isFetching:false,
    entities:[]
}

export default (state=initialState,action)=>{
    console.log(action);
    switch(action.type){
        case showRequest.toString():
            return {
                ...state,
                entities:[],
                isFetching:true,
            };
        case showSuccess.toString():
            return {
                ...state,
                entities:action.payload,
                isFetching:false,
            };
        case showFailure.toString():
            return {
                ...state,
                isFetching:false
            }
            
        default:
            return state;    
        
    }
}
