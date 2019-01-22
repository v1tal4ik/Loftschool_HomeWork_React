import {
    searchRequest,
    searchSuccess,
    searchFailure
} from '../actions.js';


//import combinereducer from 'redux';

// поменять ключ isFetch true/false  в зависимости от action
// ключ result записать data из middlewares
// ключ error записать ошибку из searchMiddlewares
const initialState = {
    isFetching:false,
    result:[],
    error:null
}

export default (state=initialState,action)=>{
    console.log(action);
    switch(action.type){
        case searchRequest.toString():
            return {
                ...state,
                result:[],
                isFetching:true,
            };
        case searchSuccess.toString():
            return {
                ...state,
                result:action.payload,
                isFetching:false,
            };
        case searchFailure.toString():
            return {
                ...state,
                error:action.payload,
                isFetching:false,
            }
            
        default:
            return state;    
        
    }
}
