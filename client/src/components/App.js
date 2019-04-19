import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import AddNote from "./AddNote";
import EditNote from "./EditNote";
import axios from "axios";
var moment = require("moment");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allNotes: [],
      title: "",
      body: ""
    };
  }

  getAllNotes() {
    // fetch("/allnotes")
    //   .then(res => res.json())
    //   .then(notes => {
    //     this.setState({ allNotes: notes }, () =>
    //       console.log("all notes fetched", notes)
    //     );
    //   });
    axios
      .get("http://localhost:5000/allnotes")
      .then(res => {
        const allNotes = res.data;
        console.log("res.data ", res.data);
        this.setState({ allNotes });
      })
      .catch(err => {
        console.error(err);
      });
  }

  // update state based on name of input
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, body } = this.state;
    const time = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");

    axios
      .post("http://localhost:5000/addnote", { title, body, time })
      .then(result => {
        console.log("result.data ", result);
      })
      .catch(err => {
        console.error(err);
      });
    this.setState({ title: "", body: "" });
    // this.props.history.push("/");
  };

  // deleteData(id) {
  //   return fetch('/delete:' + id, {
  //     method: 'delete'
  //   })
  //   .then(response => response.json());
  // }

  componentDidMount() {
    this.getAllNotes();
  }

  componentDidUpdate() {
    this.getAllNotes();
  }

  render() {
    const { allNotes } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Title
              <input
                type="text"
                className="form-control"
                name="title"
                placeholder="Title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Note
              <textarea
                className="form-control"
                name="body"
                rows="3"
                value={this.state.body}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <input type="submit" value="Submit" />
        </form>
        <Switch>
          <Route exact path="/" render={() => <Home allNotes={allNotes} />} />
          <Route path="/AddNote" render={() => <AddNote />} />
          <Route path="/EditNote" render={() => <EditNote />} />
        </Switch>
      </div>
    );
  }
}

export default App;
