import React from 'react';
import { VictoryBar, VictoryChart, VictoryLabel, VictoryAxis } from 'victory';

function VictoryBarComponent(props) {
  return (
    <div className="bar-chart-container">
      <VictoryChart
        domain={{ x: [0.5, 5.5], y: [0, 10] }}
        domainPadding={{ x: 0 }}
      >
        <VictoryLabel text="Default Axes" x={225} y={30} textAnchor="middle"/>
        <VictoryAxis dependentAxis/>
        <VictoryBar
          barWidth={40}
          barRatio={1}
          data = {props.data}
          x={props.x}
          y={props.y}
          alignment="start"
        />
      </VictoryChart>
      </div>
  );
}

export default VictoryBarComponent;