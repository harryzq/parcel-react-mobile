import React from "react";
import ReactDOM from "react-dom";

// MobX
import { Provider } from "mobx-react"
import * as stores from './src/mobx/store'

// public pages
import Layout from "./src/pages/Layout";

function App() {
  return (
    <div id='app'>
      <Provider {...stores}>
      <Layout></Layout>
    </Provider>
    </div>
    
  );
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
