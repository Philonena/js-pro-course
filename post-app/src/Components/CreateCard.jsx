import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ModalWindow from './ModalWindow';
import './CreateCard.css';


export default function CreateCard({ post, user }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Card id="card">
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <p>Autor: <a href="#" onClick={() => setModalShow(true)}>{user.name}</a></p>
        </Card.Footer>
      </Card>
      <ModalWindow show={modalShow} onHide={() => setModalShow(false)} user = {user}/>      
    </>
  )
}
