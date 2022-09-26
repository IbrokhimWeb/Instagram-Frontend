import {combineReducers} from 'redux';
import auth from './auth';
import save from "./addToSave";
import heart from "./addToHeart";

// Shamsiddin Reducer functions
import ReducerActive from '../../hooks/ShamsiddinHoks/ReducerActive';

const rootReducer = combineReducers({
    auth, heart, save, ReducerActive
})

export default rootReducer;