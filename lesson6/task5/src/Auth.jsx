import React, { Component } from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import Spinner from "./Spinner.jsx";

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connection: true,
            spinner: false,
        };
        this.spinnerWidth = {
            size: "100px",
        };
    }
    setLogin = () => {
        this.setState({
            connection: true,
        });
    };

    setSpinnerOn = () => {
        this.setState({
            spinner: true,
            connection: false,
        });
        setTimeout(() => {
            this.setState({
                spinner: false,
            });
        }, 2000);
    };

    render() {
        if (!this.state.connection && !this.state.spinner) {
            return <Logout onLogout={this.setLogin} />;
        }

        if (this.state.spinner) {
            return <Spinner size={this.spinnerWidth.size} />;
        }

        return <Login onLogin={this.setSpinnerOn} />;
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
// connection: true,
// spinner: false,
// /Spinner
// connection: false,
// spinner: true,
// /Logout
// connection: false,
// spinner: false,
