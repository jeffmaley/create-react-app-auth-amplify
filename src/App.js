import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
//import MmoGetter from './mmogetters.js';
import GetCategories from './GetCategories';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div id="queryHeader">
          <div id="appscreen">
            <GetCategories queryString="categories+all" apiUrl="https://ppn3v9rcdg.execute-api.us-east-1.amazonaws.com/Stage/GetMmorpg/" />
          </div>
        </div>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
