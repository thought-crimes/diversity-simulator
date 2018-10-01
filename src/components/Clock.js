import React from 'react';

class ClockContainer extends React.Component {
  state = {
    timeDisplay: new Date().toLocaleString(),
  };
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        timeDisplay: new Date().toLocaleString(),
      });
    }, 1000);
  }
  render() {
    return <Clock {...this.props} timeDisplay={this.state.timeDisplay} />;
  }
}

const Clock = ({ timeDisplay }) => (
  <div style={{ float: 'right' }}>{timeDisplay}</div>
);

export default ClockContainer;
