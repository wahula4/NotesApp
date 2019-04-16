import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import AddNote from "./AddNote";
import EditNote from "./EditNote";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { allNotes: [] };
  }
  // callAPI() {
  //   fetch("/api")
  //     .then(res => res.text())
  //     .then(res => this.setState({ apiResponse: res }));
  // }

  getAllNotes() {
    fetch("/allnotes")
      .then(res => res.json())
      .then(notes => {
        this.setState({ allNotes: notes }, () =>
          console.log("all notes fetched", notes)
        );
      });
  }

  componentDidMount() {
    // this.callAPI();
    this.getAllNotes();
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home allNotes={this.state.allNotes} />}
          />
          <Route path="/AddNote" render={() => <AddNote />} />
          <Route path="/EditNote" render={() => <EditNote />} />
        </Switch>
      </div>
    );
  }
}

export default App;
