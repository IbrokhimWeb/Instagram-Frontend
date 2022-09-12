import {combineReducers} from 'redux';
import auth from './auth';
import save from "./addToSave";
import heart from "./addToHeart";

const rootReducer = combineReducers({
    auth, heart, save
})

export default rootReducer;