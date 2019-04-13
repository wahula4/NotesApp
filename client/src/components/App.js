import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import AddNote from "./AddNote";
import EditNote from "./EditNote";

class App extends Component {
  render() {
    return (
      <div className="App">
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
