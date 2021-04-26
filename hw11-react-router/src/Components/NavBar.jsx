import React from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">My React Router</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/clicker">Clicker</Nav.Link>
        <Nav.Link as={Link} to="/emoji">Emoji</Nav.Link>
        <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
      </Nav>
    </Navbar>
  );
}

