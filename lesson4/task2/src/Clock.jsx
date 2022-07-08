import React, { Component} from "react";
 import './clock.scss'
 import moment from "moment";

//import 'moment-timezone';



 const date = new Date();
 
const timeZone = new Date(date.setUTCHours(-5));
const formatDate = date => moment(date).format("HH:mm:ss");
const zone = moment(date);

//console.log(formatDate(a));

class Clock extends Component {
  constructor(props){
    super(props);
    this.hour = props.offset
    this.timeZone = date.setUTCHours(this.hour);
    this.format = moment(this.timeZone).format("HH:mm:ss")

    this.state = {
      counter:  this.timeZone,
    };
  
console.log(props.location);
  setInterval(() => {
    this.setState({
      counter: this.state.counter + 1
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