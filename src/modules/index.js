import { combineReducers } from 'redux';
import auth from './Auth';
import user from './User';
import map from './Map';


export default combineReducers({ auth,user,map});
