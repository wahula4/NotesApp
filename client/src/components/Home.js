import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Navigation from "./Nav";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <CardColumns>
          {this.props.allNotes.map(note => (
            <Card key={note.ID}>
              <Card.Body>
                <Card.Title>
                  {note.Title}
                  <Link to="/editnote">
                    <i className="fas fa-edit" />
                  </Link>
                </Card.Title>
                <Card.Text>{note.Body}</Card.Text>
                <Card.Text>
                  <small className="text-muted">
                    {note.Time}
                    <i className="fas fa-trash-alt" />
                  </small>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardColumns>
      </div>
    );
  }
}

export default Home;
