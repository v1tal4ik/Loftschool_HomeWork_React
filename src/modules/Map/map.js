import {combineReducers } from 'redux';
import {handleActions} from 'redux-actions';
import {saveCoords,skipRoute} from './actions';



const coords = handleActions({
    [saveCoords]:(_state,action)=>action.payload,
    [skipRoute]:()=>[]
},[]);

const isOrder = handleActions({
    [saveCoords]:()=>true,
    [skipRoute]:()=>false
},false);






export default combineReducers({
    coords,
    isOrder
});

export const getCoords = (state)=>state.map.coords;
export const getIsOrder = (state)=>state.map.isOrder;

