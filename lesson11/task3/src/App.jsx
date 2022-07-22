import React, { Component } from 'react';

import Expand from './Expand.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    toggleBtn = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    render() {
        const mineText = (
            <p>
                Hooks are a new addition in React 16.8. They let you use state and other React
                features without writing a class.
            </p>
        );
        return (
            <div className="app">
                {/* <!-- src/Expand.jsx --> */}
                <Expand title={'Some title'} onClick={this.toggleBtn} isOpen={this.state.isOpen}>
                    {!this.state.isOpen ? '' : mineText}
                </Expand>
            </div>
        );
    }
}
export default App;
