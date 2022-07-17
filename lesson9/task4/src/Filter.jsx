import React from "react";

const Filter = ({ filterText, count, update }) => {
    return (
        <>
            <span className='filter__count'>{`${count}`}</span>
            <input
                type='text'
                className='filter__input'
                value={filterText}
                onChange={(e) => update(e.target.value)}
            />
        </>
    );
};

export default Filter;
