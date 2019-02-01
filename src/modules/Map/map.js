import {combineReducers } from 'redux';
import {handleActions} from 'redux-actions';
import {saveCoords,saveRoute,nullRoute} from './actions';



const coords = handleActions({
    [saveCoords]:(_state,action)=>action.payload,
    [nullRoute]:()=>[]
},[]);

const isRoute = handleActions({
    [saveRoute]:()=>true,
    [nullRoute]:()=>false
},false);

const removeRoute = handleActions({
    [nullRoute]:()=>true,
    [saveCoords]:()=>false
},false);


export default combineReducers({
    coords,
    isRoute,
    removeRoute
});

export const getCoords = (state)=>state.map.coords;
export const getIsRoute = (state)=>state.map.isRoute;
export const getIsRemoveRoute = (state)=>state.map.removeRoute;
