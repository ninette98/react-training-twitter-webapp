import React, { Component, Fragment } from 'react';
import Navbar from './components/navbar';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Main />
      </Fragment>
    );
  }
}

export default App;