import React, { Component} from "react";
 import './clock.scss'
 import moment from "moment";

import 'moment-timezone';

 const Time = moment(new Date());
const date =new Date();


 
const timeZone = new Date(date.setUTCHours(-5));
const formatDate = date => moment(date).format("HH:mm:ss");
const zone = moment(date).add(1, 'milliseconds').format("HH:mm:ss");

console.log(zone);

class Clock extends Component {
  constructor(props){
    super(props);
    this.hour = props.offset
    // this.timeZone = moment(date.setUTCHours(this.hour));
    // this.format = this.timeZone
     this.Time = moment(new Date()).tz('Europe/London');
     this.cityTime=this.Time.add(`${this.hour}`, 'hours').format("HH:mm:ss")

    this.state = {
      counter:  moment().add(`${this.hour}`, 'hours').format("HH:mm:ss  a"),
     
    };

  setInterval(() => {
    this.setState({
      counter: moment().add(`${this.hour}`, 'hours').format("HH:mm:ss  A")
     // this.state.counter+ 1,
    });
}, 1000);

}

  render() {
    return (
          <div className="clock">
    <div className="clock__location">
        {this.props.location}
    </div>
    <div className="clock__time">
        {this.state.counter}
    </div>
</div>
  
  );
  }

}

 export default Clock;