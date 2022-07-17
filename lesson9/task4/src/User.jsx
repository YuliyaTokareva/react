import React, { Component } from "react";

const User = ({ name, age }) => {
    return (
        <li className='user'>
            <span className='user__name'>{name}</span>
            <span className='user__age'>{age}</span>
        </li>
    );
};

export default User;

///Первое прохождение
//////нажали на кнопку Show
// ----constructor,
// ----render(),
// ----componentDidMount;

//Второе прохождение
/////После нажатия кнопки 'Update'
// ----shouldComponentUpdate();
// ----render();
// ----componentDidUpdate()

// После нажатия кнопки 'Hide'
// ----componentWillUnmount()
