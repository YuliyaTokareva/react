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

    render() {
        let button;
        if (this.state.isOnline) {
            button = <Online />;
        } else {
            button = <Offline />;
        }
        return <div className='status'>{button}</div>;
    }
}

export default Status;
