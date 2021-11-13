import React, { useState } from 'react';
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class Hourly extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    dataLine: {
        labels: this.props.labels,
      datasets: [
        {
          label: "Hourly forecast",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(225, 204,230, .3)",
          borderColor: "#fff",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(155, 17, 30, 0.7)",
          pointBackgroundColor: "#ff2801",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.data
        },
        
      ]
    }
  };

  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Hourly forecast for 4 days</h3>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default Hourly;