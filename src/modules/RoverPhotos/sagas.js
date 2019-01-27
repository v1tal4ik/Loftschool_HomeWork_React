import { takeEvery, select, put, call, fork } from 'redux-saga/effects';
import {changeSol,fetchPhotosRequest,fetchPhotosSuccess,fetchPhotosFailure} from './actions';
import {getPhotos} from './api';
import {getApiKey} from '../Auth/auth';


export function* fetchPhotosFlow(action){
    console.log(action);
    try{
        const apiKey = yield select(getApiKey);
        const result = yield call(getPhotos,apiKey, action.payload.name, action.payload.sol);
        yield put(fetchPhotosSuccess(result));
    }catch(error){
        yield put(fetchPhotosFailure(error));
    }
}

export default function*(){
    console.log('call fetchPhotosWatcher');
    yield takeEvery(fetchPhotosFlow);
}