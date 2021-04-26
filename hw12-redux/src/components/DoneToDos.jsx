import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import CreateToDo from './CreateToDo';

export default function DoneToDos() {
  const todos = useSelector((state) => state.todos);
  localStorage.setItem('todos', JSON.stringify(todos));

  return (
    <ListGroup>
      {todos.length > 0 ? 
        todos.filter(todo => todo.done === true).map(todo => <CreateToDo key={todo.id} {...todo} />) : 
        <p className='error' >ToDos not found</p>}
    </ListGroup>
  )
}
