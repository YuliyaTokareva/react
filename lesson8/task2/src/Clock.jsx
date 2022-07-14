import React, { Component } from "react";

import moment from "moment";

const getTimeWithOffset = (offset) => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(
        currentTime.setHours(currentTime.getHours() + offset + utcOffset)
    );
};
//const getTime = moment(getTimeWithOffset(props.offset)).format("HH:mm:ss A");

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: moment(getTimeWithOffset(this.props.offset)).format(
                "HH:mm:ss A"
            ),
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: moment(getTimeWithOffset(this.props.offset)).format(
                    "HH:mm:ss A"
                ),
            });
        }, 1000);
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
