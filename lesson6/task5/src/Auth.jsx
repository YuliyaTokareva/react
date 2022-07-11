import React, { Component } from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import Spinner from "./Spinner.jsx";

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            spinner: false,
        };
        this.spinnerWidth = {
            size: "100px",
        };
    }
    setLogout = () => {
        this.setState({
            status: false,
        });
    };

    setSpinnerOn = () => {
        this.setState({
            spinner: true,
        });
        setTimeout(() => {
            this.setState({
                status: true,
                spinner: false,
            });
        }, 2000);
    };

    render() {
        if (!this.state.status && !this.state.spinner) {
            return <Logout setStatus={this.setSpinnerOn} />;
        }
        if (!this.state.status && this.state.spinner) {
            return <Spinner size={this.spinnerWidth.size} />;
        }
        if (this.state.status && !this.state.spinner) {
            return <Login setStatus={this.setLogout} />;
        }
    }
}

export default Auth;

// 1. Login.jsx (Login(f)=>button Login)
// 2. Logout.jsx (Login(f)=>button Logout)
// 3. Spinner.jsx (Spinner(size)=> spinner style= "width: size")
// 4. Auth.jsx
//         - return Login default
//         - click on Login button => spinner 2sec
//         - show Logout
// /Login
// status: true,
// spinner: false,
// /Spinner
// status: true,
// spinner: true,
// /Logout
// status: false,
// spinner: false,
