import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import auth from './Auth';
import user from './User';
//import roverPhotos, { sagas as roverSagas } from './RoverPhotos';


//all reducers
export default combineReducers({ auth,user });

//all Saga
/*export function* rootSaga() {
  yield fork(roverSagas);
}*/