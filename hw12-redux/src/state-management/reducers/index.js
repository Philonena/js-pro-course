import { v4 as uuidv4 } from 'uuid';

import { ADD_TODO, DELETE_TODO, MAKE_DONE_TODO, UNDO_TODO } from '../constants';

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
};

export function reducer(state = initialState, action) {

  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, {id: uuidv4(), done: false, text: action.payload.text}]
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id != action.payload.id)
      }
    case MAKE_DONE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => todo.id == action.payload.id ? { ...todo, done: !todo.done } : todo)
      }
    case UNDO_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => todo.id == action.payload.id ? { ...todo, done: !todo.done } : todo)
      }
    default:
      return state
  }
}
