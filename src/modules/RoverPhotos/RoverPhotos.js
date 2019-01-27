import {combineReducers } from 'redux';
import {handleActions} from 'redux-actions';
import {changeSol,fetchPhotosRequest,fetchPhotosSuccess,fetchPhotosFailure} from './actions';



const sol = handleActions({
    [changeSol] : (_state,action) => ({
        current: action.payload,
        min:1,
        max:10
    })
},{
    current: 1,
        min:1,
        max:10
});

const photos = handleActions({
    [fetchPhotosRequest]: (_state,action)=>{
        return action.payload.name ={
            [action.payload.sol]:{isLoading:true,isLoaded:false,photos:[]}
        }
    }
},{
    curiosity:{},
    opportunity:{},
    spirit:{}
})


export const getSol =(state)=>state.roverPhotos.sol;


export default combineReducers({
    sol,
    photos
});

