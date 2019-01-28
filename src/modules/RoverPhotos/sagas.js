import { takeEvery, select, put, call } from 'redux-saga/effects';
import {fetchPhotosRequest,fetchPhotosSuccess,fetchPhotosFailure} from './actions';
import {getPhotos} from './api';
import {getApiKey} from '../Auth/auth';
import {getPhotosRover} from '../RoverPhotos/RoverPhotos';


function* CheckEarlyRequest (action){
    const {name,sol}= action.payload;
    const state = yield select(getPhotosRover);
    const result = state[name].hasOwnProperty(sol);
    console.log(result);
    if(result){
        console.log('true');
    }else{
        console.log('call fetchPhotosFlow');
        yield call(fetchPhotosFlow,action);
    }
    
}


export function* fetchPhotosFlow(action){
    console.log('work');
    const {name,sol} = action.payload;
    try{
        const apiKey = yield select(getApiKey);
        const result = yield call(getPhotos,apiKey, name, sol);
        yield put(fetchPhotosSuccess({
            name:name,
            sol:sol,
            photos:result.photos
        }));
        
    }catch(error){
        yield put(fetchPhotosFailure(error));
    }
}

export default function*(){
    yield takeEvery(fetchPhotosRequest,CheckEarlyRequest);
}