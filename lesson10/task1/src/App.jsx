import React, { Component } from 'react';
import UserPropfile from './UserProfile.jsx';
import UserMenu from './UserMenu.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: null,
        };
    }
    componentDidMount() {
        this.fetchUserData(this.props.userId);
    }

    fetchUserData = (userId) => {
        const userUrl = `https://api.github.com/users/${userId}`;
        fetch(userUrl)
            .then((response) => response.json())
            .then((userData) =>
                this.setState({
                    userData,
                }),
            );
    };
    render() {
        return (
            <div className="page">
                <header className="header">
                    {/* <!-- UserMenu --> */}
                    <UserMenu userData={this.state.userData} />
                </header>
                {/* <!-- UserProfile --> */}
                <div className="user">
                    <UserPropfile userData={this.state.userData} />
                </div>
            </div>
        );
    }
}
export default App;
