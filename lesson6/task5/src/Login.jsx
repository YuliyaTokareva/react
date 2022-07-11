import React from "react";

const Login = (props) => {
    return (
        <button className='login btn' onClick={props.setStatus}>
            Login
        </button>
    );
};

export default Login;
