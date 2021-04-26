import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import { addToDo } from '../state-management/actions';

export default function AddToDoForm() {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();
  
  const onInputChange = (ev) => {
    setInputValue(ev.target.value)
  };

  const onSubmit = (ev) => {
    ev.preventDefault();

    dispatch(addToDo(inputValue));
    setInputValue('');
  };

  return (
    <Form onSubmit={onSubmit} >
      <Form.Row >
        <Col className="my-2">
          <Form.Control required type="text" placeholder="Enter a ToDo" value = {inputValue} onChange={onInputChange} />
        </Col>
        <Col className="my-2">
          <Button variant="dark" type="submit">Add</Button>
        </Col>
      </Form.Row>
    </Form>
  )
}




