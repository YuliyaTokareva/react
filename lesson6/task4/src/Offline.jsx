import React from "react";

const Offline = (props) => {
    return (
        <>
            <span className='status__text'>Offline</span>
            <button className='status__btn' onClick={props.offline}>
                Login Reconnect
            </button>
        </>
    );
};

export default Offline;
