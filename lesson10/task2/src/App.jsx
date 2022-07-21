import React, { Component } from 'react';

import Profile from './Profile.jsx';
import ShoppingCart from './ShoppingCart.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                firstName: 'John',
                lastName: 'Doe',
            },
        };
    }
    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            userData: {
                ...this.state.userData,
                [name]: value,
            },
        });
    };

    render() {
        return (
            //    <!-- App -->
            <div className="page">
                <h1 className="title">
                    Hello, {this.state.userData.firstName} {this.state.userData.lastName}
                </h1>
                <main className="content">
                    {/* <!-- ShoppingCart --> */}
                    <ShoppingCart userName={this.state.userData.firstName} />
                    {/* <!-- Profile --> */}
                    <Profile userData={this.state.userData} onChange={this.onChange} />
                </main>
            </div>
        );
    }
}
export default App;
