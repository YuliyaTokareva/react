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

    handleLogin = () => {
        this.setState({
            isOnline: true,
        });
    };
    handleLogout = () => {
        this.setState({
            isOnline: false,
        });
    };
    render() {
        let button;
        if (this.state.isOnline) {
            button = <Online online={this.handleLogout} />;
        } else {
            button = <Offline offline={this.handleLogin} />;
        }
        return <div className='status'>{button}</div>;
    }
}

export default Status;
