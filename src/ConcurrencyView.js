import React from 'react';
import VictoryBarComponent from './VictoryBarComponent';
import './App.css';

class ConcurrencyView extends React.Component{
  constructor(){
    super()
    this.reservedConcurrency = 10
  }
  render(){
    console.log(this.props.data)
    const keys = Object.keys(this.props.data)
    console.log('keys', keys)
    const charts = keys.map((d)=>{
        const dataObj = [{
            'position' : 1
        }]
        console.log(d)
        dataObj[0][d] = this.props.data[d]
        console.log(dataObj)
        return(
            <VictoryBarComponent data={dataObj} x="position" y={d}/>
        )
    })
    return (
      <div className="concurrency-view">
        <header>
          <h3>concurrency</h3>
          {charts}
        </header>
      </div>
    );
  }
}

export default ConcurrencyView;