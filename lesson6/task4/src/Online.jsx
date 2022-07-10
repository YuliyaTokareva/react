import React from "react";

const Online = (props) => {
    return (
        <>
            <span className='status__text'>All</span>
            <button className='status__btn' onClick={props.status}>
                good!
            </button>
        </>
    );
};

export default Online;
