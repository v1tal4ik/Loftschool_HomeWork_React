import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {fetchUserRequest,fetchUserSuccess,fetchUserFailure} from './actions';


// Обратите внимание на тесты, они помогут вам написать код редьюсера


const isLoading = handleActions({
    [fetchUserRequest] : ()=> true,
    [fetchUserSuccess] : ()=> false,
    [fetchUserFailure] : ()=> false,
},false);

const data = handleActions({
    [fetchUserRequest] : ()=>[],
    [fetchUserSuccess] : (_state,action)=>action.payload,
},null);


export default combineReducers({
    isLoading,
    data
});

export const getIsLoading=(state)=>state.user.isLoading;
export const getData=(state)=>state.user.data;