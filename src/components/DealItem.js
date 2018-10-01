import React from 'react';
import { connect } from 'react-redux';

import { expandOneDeal, hideOneDeal } from '../store/actions';

class DealItem extends React.PureComponent {
  style = () => ({
    backgroundColor: this.props.deal.price > 10000 ? '#ddd' : 'white',
  });
  renderImagesMaybe = () => {
    if (this.props.deal.isExpanded)
      return (
        <div className="deal-images">
          {this.props.deal.media.map((imgUrl) => (
            <img key={imgUrl} src={imgUrl} width="120" />
          ))}
        </div>
      );
  };
  handleHideButtonClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.hideOneDeal(this.props.deal.key);
  };
  handleDealClick = (event) => {
    event.preventDefault();
    this.props.expandOneDeal(this.props.deal.key);
  };
  render() {
    oaeuaeoua;
    const { title, price } = this.props.deal;
    return (
      <div
        className="deal-item"
        style={this.style()}
        onClick={this.handleDealClick}
      >
        <div>{title}</div>
        <div>{price}</div>
        <button onClick={this.handleHideButtonClick}>Hide</button>
        {this.renderImagesMaybe()}
      </div>
    );
  }
}

export default connect(
  null,
  { expandOneDeal, hideOneDeal }
)(DealItem);
