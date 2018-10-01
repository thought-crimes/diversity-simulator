import React from 'react';
import { connect } from 'react-redux';

import { fetchMoreDeals } from '../store/actions';

class FetchMoreDealsButton extends React.PureComponent {
  render() {
    return (
      <button
        disabled={this.props.isFetching}
        onClick={this.props.fetchMoreDeals}
      >
        {this.props.isFetching ? 'Feching Deals...' : 'Fetch More Deals'}
      </button>
    );
  }
}

export default connect(
  (state) => ({
    isFetching: state.isFetching,
  }),
  { fetchMoreDeals }
)(FetchMoreDealsButton);
