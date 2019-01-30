import {combineReducers } from 'redux';
import {handleActions} from 'redux-actions';
import {testUser} from './actions';



const testing = handleActions({
    [testUser]:(_state,action)=>action.payload
},'');


export default combineReducers({
    testing
})