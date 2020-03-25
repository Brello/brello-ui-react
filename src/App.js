import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/home/home.component";
import LoginPage from "./pages/login/login.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
