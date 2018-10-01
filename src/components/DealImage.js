import React from 'react';

class DealImage extends React.Component {
  render() {
    return (
      <span className="deal-image">
        <img alt="deal" src={this.props.imageSrc} />
      </span>
    );
  }
}

export default DealImage;
