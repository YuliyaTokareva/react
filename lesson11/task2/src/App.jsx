import React, { Component } from 'react';

import Dialog from './Dialog.jsx';
import EvenNumbers from './EvenNumbers.jsx';
import OddNumbers from './OddNumbers.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }
    hidenDialog = () => {
        this.setState({
            isOpen: false,
        });
    };
    showDialog = () => {
        this.setState({
            isOpen: true,
        });
    };

    render() {
        return (
            <div className="app">
                <button className="btn" onClick={this.showDialog}>
                    Show dialog
                </button>
                <Dialog
                    isOpen={this.state.isOpen}
                    onClose={this.hidenDialog}
                    title="Recommendation"
                >
                    <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
                </Dialog>
            </div>
        );
    }
}
export default App;
