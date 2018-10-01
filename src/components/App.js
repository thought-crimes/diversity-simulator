import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  state = {
    inputValue: ''
  };
  render() {
    return (
      <React.Fragment>
        <div className="app" />
      </React.Fragment>
    );
  }
}

export default connect()(App);
