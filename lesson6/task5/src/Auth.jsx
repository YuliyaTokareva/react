import React, { Component } from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import Spinner from "./Spinner.jsx";

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true,
            spinner: false,
        };
        this.spinnerWidth = {
            size: "100px",
        };
    }
    setLogin = () => {
        this.setState({
            status: true,
        });
    };

    setSpinnerOn = () => {
        this.setState({
            spinner: true,
            status: false,
        });
        setTimeout(() => {
            this.setState({
                spinner: false,
            });
        }, 2000);
    };

    render() {
        if (this.state.status && !this.state.spinner) {
            return <Login onLogin={this.setSpinnerOn} />;
        }
        if (!this.state.status && this.state.spinner) {
            return <Spinner size={this.spinnerWidth.size} />;
        }
        if (!this.state.status && !this.state.spinner) {
            return <Logout onLogout={this.setLogin} />;
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
// status: false,
// spinner: true,
// /Logout
// status: false,
// spinner: false,
