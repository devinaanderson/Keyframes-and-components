import React, { Component } from 'react';
import { Counter } from './counter';

export default class App extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      count: 0,
      size: 32,
      subsize: 2
    }
  }

  increment(arg) {
    this.setState({count: this.state.count + arg})
    this.setState({size: this.state.size + (arg * 12)})
  }
  shrincrement(arg) {
    this.setState({count: this.state.count - arg})
    this.setState({size: this.state.size - (arg * 12)})
  }

  render() {
    return (
      <div className='app'>
        <div className='sizeControl'>
          <Counter name='INCREMENTOR' count={this.state.count} counter={() => {this.increment(1)}} />
          <div style={{fontSize:'20px'}}>Current Size: {this.state.size}</div>
          <Counter name='SHRINCREMENTOR' count={this.state.count} counter={() => {this.shrincrement(1)}} />
        </div>
        
        <p style={{fontSize:`${this.state.size}px`}}> DevCamp React Starter </p>
        <h2>React Redux Router</h2>
        
      </div>
    );
  }
}
