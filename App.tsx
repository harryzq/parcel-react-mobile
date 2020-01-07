import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import './src/assets/scss/index.scss'
// MobX
import { Provider } from "mobx-react"
import * as stores from './src/mobx/store'

// public pages
import Layout from "./src/pages/Layout";

function App() {
  return (
    <Fragment>
      <Provider {...stores}>
        <Layout></Layout>
      </Provider>
    </Fragment>

  );
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
