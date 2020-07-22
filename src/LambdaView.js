import React from 'react';
import {VictoryChart, VictoryScatter} from 'victory';
import './App.css';

class LambdaView extends React.Component{
  constructor(){
    super()
    this.activeLambdas = 0;
  }
  render(){
    const lambdas = this.props.lambdas.map((lambda)=>{
      console.log(lambda)
       return(
          <li>{lambda.name}</li>
       )
    })
    lambdas.push(<li>new</li>)
    return (
      <div className="lambda-view">
          <h3>simulated lambda functions</h3>
          <div class="lambda-dropdown dropdown">
            <span>lambdas</span>
            <div class="lambda-list dropdown-content">
              {lambdas}
            </div>
          </div>
          <VictoryChart

              domain={{ x: [0, 100], y: [0, 10] }}
              domainPadding={{ x: 0 }}
            >
              <VictoryScatter
                style={{ data: { fill: "#c43a31" } }}
                size={7}
                data={this.props.data}
              />
            </VictoryChart>
      </div>
    );
  }
}

export default LambdaView;