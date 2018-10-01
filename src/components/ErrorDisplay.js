import React from 'react';
import { connect } from 'react-redux';

class ErrorDisplay extends React.Component {
  render() {
    return this.props.errorMessage ? (
      <div style={{ color: 'red' }}>{this.props.errorMessage}</div>
    ) : null;
  }
}

export default connect(({ errorMessage }) => ({
  errorMessage,
}))(ErrorDisplay);
