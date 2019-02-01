import {combineReducers } from 'redux';
import {handleActions} from 'redux-actions';
import {saveData,fetchError} from './actions';



const name = handleActions({
    [saveData]:(_state,action)=>action.payload.name
},'123');

const numberOfCard = handleActions({
    [saveData]:(_state,action)=>action.payload.numberOfCard
},'123412341234');

const date = handleActions({
    [saveData]:(_state,action)=>action.payload.date
},'11.11.1111');

const cvv = handleActions({
    [saveData]:(_state,action)=>action.payload.cvv
},'123');

const error = handleActions({
    [fetchError]:(_state,action)=>action.payload,
    [saveData]:()=>''
},'');

export default combineReducers({
    name,
    numberOfCard,
    date,
    cvv,
    error
});

export const getName = (state)=>state.user.name;
export const getNumberOfCard = (state)=>state.user.numberOfCard;
export const getDate = (state)=>state.user.date;
export const getCVV = (state)=>state.user.cvv;
export const getError = (state)=>state.user.error;