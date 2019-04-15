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
          <Card bg="primary" text="white" className="text-center p-3">
            <blockquote className="blockquote mb-0 card-body">
              <Link to="/editnote">
                <i class="fas fa-edit" />
              </Link>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card bg="primary" text="white" className="text-center">
            <Card.Body>
              <Card.Title>
                Card title{" "}
                <Link to="/editnote">
                  <i class="fas fa-edit" />
                </Link>
              </Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
              <Card.Text>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                Card title{" "}
                <Link to="/editnote">
                  <i class="fas fa-edit" />
                </Link>
              </Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
              <Card.Text>
                <small className="text-muted">
                  Last updated 3 mins ago
                  <i class="fas fa-trash-alt" />
                </small>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </div>
    );
  }
}

export default Home;
