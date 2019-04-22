import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link, withRouter } from "react-router-dom";

const AddNote = ({ title, body, handleChange, handleSubmit }) => {
  return (
    <div>
      <Navbar>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none" }}>
            Notes App
          </Link>
        </Navbar.Brand>
      </Navbar>
      <h1 style={{ textAlign: "center" }}>Add Note</h1>
      <div style={{ margin: "0 auto", width: "50%" }}>
        <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
          <div className="form-group">
            <label>
              Title
              <input
                type="text"
                className="form-control"
                name="title"
                value={title}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Note
              <textarea
                className="form-control"
                name="body"
                rows="4"
                value={body}
                onChange={handleChange}
                style={{ display: "inline-block" }}
                required
              />
            </label>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default withRouter(AddNote);
