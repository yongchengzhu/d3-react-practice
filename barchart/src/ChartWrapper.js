import React from 'react';
import D3Chart from './D3Chart';

class ChartWrapper extends React.Component {
  componentDidMount() {
    this.state = {
      chart: new D3Chart(this.refs.chart)
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    this.state.chart.update(nextProps.gender);
  }

  render() {
    return (
      <div ref="chart"></div>
    );
  }
};

export default ChartWrapper;