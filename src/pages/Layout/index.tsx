import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import loadable from '@loadable/component'

const User = loadable(() => import('../User'))

export default class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Home">HelloWorld</Link>
              </li>
            </ul>
            <Switch>
              <Route path="/Home">
                <User></User>
              </Route>
            </Switch>
          </div>
        </Router>
    );
  }
}
