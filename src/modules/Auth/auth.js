import {combineReducers } from 'redux';
import {handleActions} from 'redux-actions';
import {successAuth,errorAuth} from './actions';



const login = handleActions({},'test@test.ru');

const password = handleActions({},'321');

const isAuthorize = handleActions({
    [successAuth]:()=>true,
    [errorAuth]:()=>false,
},false);

const error = handleActions({
    [errorAuth]:()=>'Не вений login или password',
},''); 


export default combineReducers({
    login,
    password,
    isAuthorize,
    error
});

export const getLogin=(state)=>state.auth.login;
export const getPassword=(state)=>state.auth.password;
export const getIsAuthorize=(state)=>state.auth.isAuthorize;
export const getError=(state)=>state.auth.error;