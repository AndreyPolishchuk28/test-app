export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_QUANTITY = 'SET_QUANTITY';
export const SET_COMMENTS = 'SET_COMMENTS';

export const setTask = task => ({
    type: ADD_TASK,
    payload: task
});

export const deleteTask = task => ({
    type: DELETE_TASK,
    payload: task
});

export const getQuantity = payload => ({
    type: SET_QUANTITY,
    payload: payload
});

export const setComments = comments => ({
    type: SET_COMMENTS,
    payload: comments
});