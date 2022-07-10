import React from "react";

const Online = (props) => {
    return (
        <>
            <span className='status__text'>All</span>
            <button className='status__btn' onClick={props.online}>
                good!
            </button>
        </>
    );
};

export default Online;
