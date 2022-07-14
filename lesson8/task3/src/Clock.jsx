import React, { Component } from "react";

import moment from "moment";

function getTimeWithOffset(offset) {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;

    return new Date(
        currentTime.setHours(currentTime.getHours() + offset + utcOffset)
    );
}

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.getTime(),
        };
    }
    getTime() {
        return moment(getTimeWithOffset(this.props.offset)).format(
            "HH:mm:ss A"
        );
    }

    componentDidMount() {
        this.inretval = setInterval(() => {
            this.setState({
                time: this.getTime(),
            });
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.inretval);
    }

    render() {
        return (
            <div className='clock'>
                <div className='clock__location'>{this.props.location}</div>
                <div className='clock__time'>{this.state.time}</div>
            </div>
        );
    }
}

export default Clock;
