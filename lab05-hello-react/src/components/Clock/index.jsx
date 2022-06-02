import React, { Component } from 'react'; 
import './style.css'; 

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { current: new Date() };
  }

  componentDidMount() {
    // define attribute intervalID for class Clock
    this.intervalID = setInterval(() => this.timer_tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  timer_tick() {
    this.setState({ current: new Date() });
  }
  
  render() {
    return(
      <h3>Now is: <span className='clock'>{this.state.current.toLocaleTimeString()}</span></h3>
    );
  }
}