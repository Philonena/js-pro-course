import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './ModalWindow.css';

export default function ModalWindow({show, onHide, user}) {
  return (
    <Modal show = {show} onHide = {onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {user.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Adress: {user.address.city}, {user.address.street}, {user.address.suite}</p>
        <p>Email: <a href={`mailto:${user.email}`}>{user.email}</a></p>
        <p>Phone: <a href={`mtel:+${user.phone}`}>{user.phone}</a></p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
