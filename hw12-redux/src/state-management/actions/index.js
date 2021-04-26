import {ADD_TODO, DELETE_TODO, MAKE_DONE_TODO, UNDO_TODO} from '../constants';

export const addToDo = (text) => ({
  type: ADD_TODO,
  payload: {
    text,
  }
});

export const deleteToDo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  }
});

export const makeDoneToDo = (id) => ({
  type: MAKE_DONE_TODO,
  payload: {
    id,
  }
});

export const undoToDo = (id) => ({
  type: UNDO_TODO,
  payload: {
    id,
  }
});
