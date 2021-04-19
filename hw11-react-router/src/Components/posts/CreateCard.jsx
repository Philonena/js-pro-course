import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link, Route } from "react-router-dom";

import ModalWindow from './ModalWindow';
import './CreateCard.css';


export default function CreateCard({ post, user }) {
  return (
    <>
      <Card id="card">
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <p>Autor: <Link to={`/posts/${user.id}`}>{user.name}</Link></p>
        </Card.Footer>
      </Card>
      <Route path={`/posts/${user.id}`} strict>
        <ModalWindow user={user} />
      </Route>
    </>
  )
}
