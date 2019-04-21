import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Navigation from "./Nav";
import { withRouter } from "react-router-dom";
var moment = require("moment");

class Home extends Component {
  // route = () => {
  //   this.props.history.push('/');
  // }

  render() {
    return (
      <div>
        <Navigation />
        <CardColumns style={{ margin: "20px" }}>
          {this.props.allNotes.length > 0 ? (
            this.props.allNotes.map(note => (
              <Card key={note.ID}>
                <Card.Body>
                  <Card.Title>
                    <u>{note.Title ? note.Title : "No Title"}</u>
                    <button
                      type="button"
                      className="btn-sm btn-info float-right"
                      onClick={() =>
                        this.props.editNote(note.ID, note.Title, note.Body)
                      }
                    >
                      <span>
                        <i className="fas fa-lg fa-edit" />
                      </span>
                    </button>
                  </Card.Title>
                  <Card.Text>{note.Body ? note.Body : "No Note"}</Card.Text>
                  <Card.Text>
                    <small className="text-muted">
                      {moment(note.Time).format("lll")}
                      <button
                        type="button"
                        className="btn-sm btn-info float-right"
                        onClick={() => this.props.deleteNote(note.ID)}
                      >
                        <span>
                          <i className="fas fa-trash-alt" />
                        </span>{" "}
                      </button>
                    </small>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
          ) : (
            <h2>Empty</h2>
          )}
        </CardColumns>
      </div>
    );
  }
}

export default withRouter(Home);
