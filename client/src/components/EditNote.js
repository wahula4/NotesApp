import React from "react";
import { Link, withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const EditNote = ({ note, handleEditSubmit, handleChange }) => {
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
      <form onSubmit={handleEditSubmit}>
        <div className="form-group">
          <label>
            Title
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              onChange={handleChange}
              value={note.Title}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Note
            <textarea
              type="text"
              className="form-control"
              id="body"
              name="body"
              rows="4"
              onChange={handleChange}
              value={note.Body}
            />
          </label>
        </div>
        <input type="submit" value="Submit" />
        {/* <button type="button">Cancel</button> */}
      </form>
    </div>
  );
};

export default withRouter(EditNote);
