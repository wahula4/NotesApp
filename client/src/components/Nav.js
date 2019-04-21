import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, withRouter } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar style={{ backgroundColor: "teal" }}>
      <Navbar.Brand>
        <Link to="/" style={{ textDecoration: "none" }}>
          <b>Notes App</b>
        </Link>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Link to="/addnote" style={{ textDecoration: "none", color: "white" }}>
          Add Note
        </Link>
      </Nav>
    </Navbar>
  );
};

export default withRouter(Navigation);
