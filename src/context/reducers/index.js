import {combineReducers} from 'redux';
import auth from './auth';
import save from "./addToSave";
import heart from "./addToHeart";

// Shamsiddin Reducer functions
import ReducerActive from '../../hooks/ShamsiddinHoks/ReducerActive';
import ReducerForSlider from '../../hooks/ShamsiddinHoks/ReducerForSlider';

const rootReducer = combineReducers({
    auth, heart, save, ReducerActive, ReducerForSlider
})

export default rootReducer;