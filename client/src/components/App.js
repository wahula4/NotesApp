import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import AddNote from "./AddNote";
import EditNote from "./EditNote";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  callAPI() {
    fetch("/api")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }
  componentDidMount() {
    this.callAPI();
  }
  render() {
    return (
      <div className="App">
        <p className="App-intro">{this.state.apiResponse}</p>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/AddNote" render={() => <AddNote />} />
          <Route path="/EditNote" render={() => <EditNote />} />
        </Switch>
      </div>
    );
  }
}

export default App;
