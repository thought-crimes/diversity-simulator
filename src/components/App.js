import React from 'react';
import { connect } from 'react-redux';

import DealList from './DealList';
import FetchMoreDealsButton from './FetchMoreDealsButton';
import Clock from './Clock';
import { doSearch } from '../store/actions';
import ErrorDisplay from './ErrorDisplay';

class App extends React.Component {
  state = {
    inputValue: '',
  };
  handleSearchSubmit = (event) => {
    event.preventDefault();

    this.props.doSearch(this.state.inputValue);
  };
  handleInputChange = (event) => {
    const newValue = event.target.value;
    this.setState(() => ({ inputValue: newValue }));
  };
  render() {
    return (
      <React.Fragment>
        <Clock />
        <div className="app">
          <form onSubmit={this.handleSearchSubmit}>
            <input
              type="search"
              placeholder="Search all deals"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
            />
            <button type="submit">Search</button>
          </form>
          <DealList />
          <ErrorDisplay />
          <FetchMoreDealsButton />
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { doSearch }
)(App);
