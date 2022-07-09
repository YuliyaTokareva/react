import React, { Component} from "react";
 import './clock.scss'
 import moment from "moment";

//import 'moment-timezone';

 //const Time = moment(new Date());
const date =new Date().toLocaleString("en-US", {timeZone: "Europe/London"});


console.log(date);

class Clock extends Component {
  constructor(props){
    super(props);
    this.hour = props.offset
    this.Time = moment(date);
    this.start = moment(this.Time._d).add(`${this.hour}`, 'hours').format("HH:mm:ss A");


    this.state = {
      counter:  this.start,
     
    };

  setInterval(() => {
    this.setState({
      counter: moment(this.state.counter, "HH:mm:ss A").add(1, 'seconds').format("HH:mm:ss A"),
     
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