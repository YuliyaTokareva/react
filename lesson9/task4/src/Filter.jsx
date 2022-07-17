import React from "react";

const Filter = ({ val, sorting, update }) => {
    return (
        <>
            <span className='filter__count'>{`${sorting}`}</span>
            <input
                type='text'
                className='filter__input'
                value={val}
                onChange={(e) => update(e.target.value)}
            />
        </>
    );
};

export default Filter;
