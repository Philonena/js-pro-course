import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';

import { deleteToDo } from '../state-management/actions';
import { makeDoneToDo } from '../state-management/actions';
import { undoToDo } from '../state-management/actions';

export default function CreateToDo({ id, done, text }) {
  const dispatch = useDispatch();

  const onRemoveToDo = () => {
    dispatch(deleteToDo(id))
  };

  const onMakeDoneToDo = () => {
    dispatch(makeDoneToDo(id))
  };

  const onUndoToDo = () => {
    dispatch(undoToDo(id))
  };

  return (
    <>
      <ListGroup.Item>{text}</ListGroup.Item>
      <div className="buttonGrup">
        {done === true ?
          <Button variant="warning" onClick={() => onUndoToDo()} >Undo</Button> :
          <Button variant="success" onClick={() => onMakeDoneToDo()} >Make Done</Button>}
        <Button variant="danger" onClick={() => onRemoveToDo()} >Delete</Button>
      </div>

    </>
  )
}
