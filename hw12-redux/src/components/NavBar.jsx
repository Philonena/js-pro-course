import React from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
        <Nav.Link as={Link} to="/all">All</Nav.Link>
        <Nav.Link as={Link} to="/active">Active</Nav.Link>
        <Nav.Link as={Link} to="/done">Done</Nav.Link>
      </Nav>
    </Navbar>
  );
}

