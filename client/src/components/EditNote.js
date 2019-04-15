import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class EditNote extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none" }}>
              Notes App
            </Link>
          </Navbar.Brand>
        </Navbar>
        <h1>Edit</h1>
        <Form className="col-sm-8 offset-sm-2">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Groceries" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Note</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default EditNote;
