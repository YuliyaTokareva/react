import React, { Component } from "react";
import Online from "./Online.jsx";
import Offline from "./Offline.jsx";

class Status extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOnline: false,
        };
    }

    internetStatus = () => {
        this.setState({
            isOnline: !this.state.isOnline,
        });
    };

    render() {
        let button;
        if (this.state.isOnline) {
            button = <Online status={this.internetStatus} />;
        } else {
            button = <Offline status={this.internetStatus} />;
        }
        return <div className='status'>{button}</div>;
    }
}

export default Status;
