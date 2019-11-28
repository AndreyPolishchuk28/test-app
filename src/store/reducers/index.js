import { createStore, combineReducers } from "redux";
import {ADD_TASK, DELETE_TASK, SET_COMMENTS, SET_INDEX } from "../actions";

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

        case SET_INDEX:
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

function saveToLocalStorage(state) {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState)
    } catch (e) {
        console.log(e);
    }
}

function loadFromLocalStorage() {
    try{
        const serializedState = localStorage.getItem('state');
        if(serializedState === null) return undefined;
        return JSON.parse(serializedState)
    } catch (e) {
        console.log(e);
        return undefined
    }
}

const persistedState = loadFromLocalStorage();

const store = createStore(
    combineReducers({ task: taskReducer }),
    persistedState
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store