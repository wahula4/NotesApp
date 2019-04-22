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
      <h1 style={{ textAlign: "center" }}>Edit Note</h1>
      <div style={{ margin: "0 auto", width: "50%" }}>
        <form onSubmit={handleEditSubmit} style={{ textAlign: "center" }}>
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
                required
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

export default withRouter(EditNote);
