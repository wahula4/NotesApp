import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AddNote extends Component {
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
        <h1>Add Note</h1>
        {/* <form className="col-sm-8 offset-sm-2" onSubmit={this.addNote}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Groceries"
              value={note.title}
              onChange={e =>
                this.setState({ note: { ...note, title: e.target.value } })
              }
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Note</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value={note.body}
              onChange={e =>
                this.setState({ note: { ...note, body: e.target.value } })
              }
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form> */}
      </div>
    );
  }
}

export default AddNote;
