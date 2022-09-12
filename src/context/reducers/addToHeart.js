/* eslint-disable default-case */
import {ADD_TO_HEART} from "../actions/actionTypes";

const addToHeart = (state=[],action) => {
    switch(action.type){
        case ADD_TO_HEART:
            state = action.payload;
            return state;
        default: 
            return state;
    }
}

export default addToHeart;