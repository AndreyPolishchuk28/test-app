export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_INDEX = 'SET_INDEX';
export const SET_COMMENTS = 'SET_COMMENTS';

export const setTask = task => ({
    type: ADD_TASK,
    payload: task
});

export const deleteTask = task => ({
    type: DELETE_TASK,
    payload: task
});

export const setIndex = payload => ({
    type: SET_INDEX,
    payload: payload
});

export const setComments = comments => ({
    type: SET_COMMENTS,
    payload: comments
});