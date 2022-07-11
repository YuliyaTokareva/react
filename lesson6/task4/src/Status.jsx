import React, { Component } from "react";
import Online from "./Online.jsx";
import Offline from "./Offline.jsx";

const Status = (props) => {
    let button;
    if (props.isOnline) {
        return (
            <div className='status'>
                <Online />
            </div>
        );
    } else {
        <div className='status'>
            <Offline />
        </div>;
    }
    return <div className='status'>{button}</div>;
};

export default Status;
