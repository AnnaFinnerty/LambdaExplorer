import React from 'react';
import ConcurrencyView from "./ConcurrencyView";
import LambdaView from './LambdaView';
import InvokeInput from './InvokeInput';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state ={
       reservedConcurrency: 10,
       unreservedConcurrency: 990,
       speed: 1,
       activeFun: "test1",
       lambdas: [
        { name: "test1", runtime: "nodejs", initduration: "400", duration: "200", timeout: "300", initiator: "start", calls: "test2", failure_rate: 0, startX: 5},
        { name: "test2", runtime: "nodejs", initduration: "400", duration: "200", timeout: "300", initiator: "start", calls: "test2", failure_rate: 0, startX: 10},
      ],
      invokes: [
        { l:"test1", x: 20, y: 1, t: 100},
        { l:"test2", x: 40, y: 1, t: 100 },
        { l:"test2", x: 40, y: 2, t: 100 },
        { l:"test1", x: 20, y: 2, t: 100 },
        { l:"test2", x: 40, y: 3, t: 100 },
        { l:"test2", x: 40, y: 4, t: 100 }
      ]
    }
  }
  addLambda(){
    const lam = {

    }
    this.setState({
      lambdas: [lam, ...this.state.lambdas]
    })
  }
  addInvoke(){
    const i = {

    }
    this.setState({
      invokes: [i, ...this.state.invokes]
    })
  }
  updateSpeed(){

  }
  render(){
    const data = {
      reservedConcurrency: this.state.reservedConcurrency,
      unreservedConcurrency: this.state.unreservedConcurrency
    };
    return (
      <div className="App">
        <header>
          <h3>lambda explorer</h3>
        </header>
        <main>
          <LambdaView data={this.state.invokes} lambdas={this.state.lambdas}/>
          <ConcurrencyView data={data}/>
        </main>
        <InvokeInput data={data}/>
      </div>
    );
  }
}

export default App;
