import { createStore, combineReducers } from "redux";
import {ADD_TASK, DELETE_TASK, SET_COMMENTS, SET_QUANTITY} from "../actions";

const initialState = {
    allTask: [],
    active_index: ''
};

const taskReducer = (state = initialState, action) =>{
    const {type, payload} = action;
    switch(type){
        case ADD_TASK:
            return {...state,
                allTask: [
                    ...state.allTask,
                    payload
                ]
            };

        case DELETE_TASK:
            return {...state,
                allTask: payload
            };

        case SET_QUANTITY:
            return {
                ...state, active_index: payload.active_index
            };

        case SET_COMMENTS:
            return {...state,
                allTask: payload
            };


        default:
            return{ ...state }
    }
};

const store = createStore(
    combineReducers({ task: taskReducer }),
    JSON.parse(localStorage['redux']));

store.subscribe(() =>{
    localStorage['redux'] = JSON.stringify(store.getState())
});

export default store