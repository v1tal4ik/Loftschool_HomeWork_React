import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import {fetchUserRequest,fetchUserSuccess,fetchUserFailure} from './actions';
import {getUserInfo} from './api';
import getApiKey from '../Auth/reducer';

function* fetchUserWatcher() {
  yield takeLatest(fetchUserRequest, fetchUserFlow);
}

export function* fetchUserFlow(action) {
  console.log('action',action);
  try{
    const apiKey = yield select(getApiKey);
    const result = yield call(getUserInfo,apiKey,action.payload);
    yield put(fetchUserSuccess(result));
  } catch (error){
    yield put(fetchUserFailure(error));
  }
}

export default function*() {
  yield fork(fetchUserWatcher);
}
