import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import styles from 'chartist/dist/chartist.css';

let data = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  series: [
    [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
    [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null],
    [null, null, null, null, 3, 4, 1, 3, 4,  6,  7,  9, 5, null, null, null]
  ]
}
let options = {
  fullWidth: false,
  chartPadding: {
    left: 0,
    right: 0
  },
  lineSmooth: Chartist.Interpolation.cardinal({
    fillHoles: true,
  }),
  showPoint: false,
  low: 0,
  axisX: {
    showLabel: false,
    showGrid: false
  },
  axisY: {
    showLabel: false,
    showGrid: false
  }
}

class StockChart extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.updateChart();
  }

  updateChart() {
    return new Chartist.Line(`.${this.props.name}`, data, options);
  }

  render() {
    return (
      <div className={this.props.name}></div>
    );
  }
}

export default StockChart
