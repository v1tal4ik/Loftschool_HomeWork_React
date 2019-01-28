import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {fetchFollowersRequest,fetchFollowersSuccess,fetchFollowersFailure} from './actions';

// Обратите внимание на тесты reducer.test.js
// Они помогут вам написать редьюсер

const isLoading = handleActions({
    [fetchFollowersRequest] : ()=> true,
    [fetchFollowersSuccess] : ()=> false,
    [fetchFollowersFailure] : ()=> false,
},false);

const data = handleActions({
    [fetchFollowersRequest] : ()=>[],
    [fetchFollowersSuccess] : (_state,action)=>action.payload,
},null)


export default combineReducers({
    isLoading,
    data
});

export const getIsLoading=(state)=>state.user.isLoading;
export const getData=(state)=>state.followers.data;