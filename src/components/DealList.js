import React from 'react';
import { connect } from 'react-redux';

import DealItem from './DealItem';

class DealList extends React.Component {
  render() {
    return (
      <div className="deal-list">
        {this.props.dealsToDisplay.map((deal) => (
          <div key={deal.key}>
            <DealItem deal={deal} />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dealsToDisplay: state.dealsFromSearch || state.deals,
});

export default connect(mapStateToProps)(DealList);
