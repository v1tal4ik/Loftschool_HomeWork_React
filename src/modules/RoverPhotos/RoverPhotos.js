import {combineReducers } from 'redux';
import {handleActions} from 'redux-actions';
import {changeSol,fetchPhotosRequest,fetchPhotosSuccess,fetchPhotosFailure} from './actions';
import produce from 'immer';


export const names = ['curiosity','opportunity','spirit'];

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
        const{name,sol} = action.payload;
        return produce(_state,draft=>{
            draft[name][sol]={
                isLoading:true,
                isLoaded:false,
                photos:[]
            }
        })
    },
    [fetchPhotosSuccess]: (_state,action)=>{
        const {name,sol,photos} = action.payload;

        return produce(_state, draft=>{
            draft[name][sol]={
                isLoading:false,
                isLoaded:true,
                photos:photos
            }
        });
    },
    [fetchPhotosFailure]:(_state,action)=>{
        const {name,sol,error} = action.payload;

        return produce(_state,draft=>{
            draft[name][sol]={
                isLoading:false,
                isLoaded:false,
                error:error
            }
        })
    }
},{
    curiosity:{},
    opportunity:{},
    spirit:{}
})


export const getSol =(state)=>state.roverPhotos.sol;
export const getPhotosRover = (state) => state.roverPhotos.photos;



export default combineReducers({
    sol,
    photos
});
