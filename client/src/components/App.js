import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
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
      body: "",
      note: [] // note being edited
    };
  }

  // retrieve all notes from database
  getAllNotes = () => {
    axios
      .get("http://localhost:5000/allnotes")
      .then(res => {
        const allNotes = res.data;
        return this.setState({ allNotes });
      })
      .catch(err => {
        console.error(err);
      });
  };

  // update state based on name of input
  handleChange = event => {
    return this.setState({ [event.target.name]: event.target.value });
  };

  // handle submit for adding a note
  handleSubmit = async event => {
    event.preventDefault();
    let { title, body } = this.state;
    let time = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");

    await axios
      .post("http://localhost:5000/addnote", { title, body, time })
      .then(data => {
        console.log("handlesubmit", data);
        return this.getAllNotes();
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({ body: "", title: "" }); // clear form after submit
    this.props.history.push("/"); // redirect to home after submit
  };

  // handle submit for editing a note
  handleEditSubmit = async event => {
    event.preventDefault();
    let { title, body } = this.state;
    let time = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
    let id = this.state.note[0].ID;

    await axios
      .put(`http://localhost:5000/edit`, { title, body, time, id })
      .then(data => {
        return this.getAllNotes();
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({ body: "", title: "", note: "" });
    this.props.history.push("/");
  };

  // when user clicks edit button, get note data and pre-fill edit form
  editNote = async id => {
    this.props.history.push("/editnote");
    await axios
      .get(`http://localhost:5000/note/${id}`)
      .then(res => {
        const note = res.data;
        this.setState({ note });

        let title = note[0].Title;
        let body = note[0].Body;

        document.getElementById("title").value = title;
        document.getElementById("body").value = body;

        this.setState({ title, body });
      })
      .catch(err => {
        console.error(err);
      });
  };

  // delete note by id
  deleteNote = async id => {
    await axios
      .delete(`http://localhost:5000/delete/${id}`)
      .then(() => {
        return this.getAllNotes();
      })
      .catch(err => {
        console.error(err);
      });
  };

  // retrieve all notes from database on page load
  componentDidMount() {
    return this.getAllNotes();
  }

  render() {
    const { allNotes, title, body, note } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                allNotes={allNotes}
                editNote={this.editNote}
                deleteNote={this.deleteNote}
                note={note}
              />
            )}
          />
          <Route
            path="/AddNote"
            render={() => (
              <AddNote
                title={title}
                body={body}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            )}
          />
          <Route
            path="/EditNote"
            render={() => (
              <EditNote
                note={note}
                handleChange={this.handleChange}
                handleEditSubmit={this.handleEditSubmit}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
