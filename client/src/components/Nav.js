import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <Link to="/" style={{ textDecoration: "none" }}>
          Notes App
        </Link>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Button>
          <Link
            to="/addnote"
            style={{ textDecoration: "none", color: "white" }}
          >
            Add Note
          </Link>
        </Button>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
