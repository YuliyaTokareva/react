import React from 'react';

const Filter = ({ filterText, count, onChange }) => {
    // console.log({ filterText, count, onChange });
    return (
        <>
            <span className="filter__count">{`${count}`}</span>
            <input
                type="text"
                className="filter__input"
                value={filterText}
                onChange={(e) => {
                    onChange(e.target);
                }}
            />
        </>
    );
};

export default Filter;
