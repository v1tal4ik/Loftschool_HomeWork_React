import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import {fetchFollowersRequest,fetchFollowersSuccess,fetchFollowersFailure} from './actions';
import {getFollowersInfo} from './api';
import {getApiKey} from '../Auth/reducer';


function* fetchFollowersWatcher() {
  yield takeLatest(fetchFollowersRequest, fetchFollowersFlow); // Замените вопросительный знак на подходящий экшен
}

export function* fetchFollowersFlow(action) {
  // Реализуйте загрузку данных
  // Используйте экшены FETCH_SUCCESS / FETCH_FAILURE
  try{
    const apiKey = yield select(getApiKey);
    const result = yield call(getFollowersInfo,apiKey,action.payload);
    yield put(fetchFollowersSuccess(result));
  } catch (error){
    yield put(fetchFollowersFailure(error));
  }
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
