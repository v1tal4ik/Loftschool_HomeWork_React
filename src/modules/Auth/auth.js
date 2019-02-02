import {combineReducers } from 'redux';
import {handleActions} from 'redux-actions';
import {successAuth,errorAuth,exitAuth} from './actions';



const login = handleActions({},'test@test.ru');

const password = handleActions({},'321');

const isAuthorize = handleActions({
    [successAuth]:()=>true,
    [errorAuth]:()=>false,
    [exitAuth]:()=>false
},false);

const error = handleActions({
    [errorAuth]:()=>'* Логін або пароль введено не вірно',
    [exitAuth]:()=>''
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