import React, { Component } from 'react';
import Numbers from './Numbers.jsx';
import EvenNumbers from './EvenNumbers.jsx';
import OddNumbers from './OddNumbers.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        };
    }
    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                number: this.state.number + 1,
            });
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    render() {
        return (
            <div className="app">
                {/* <!-- OddNumbers --> */}

                <OddNumbers title={'Odd number'} number={this.state.number} />
                {/* <!-- EvenNumbers --> */}

                <EvenNumbers title={'Even number'} number={this.state.number} />
                {/* <!-- Numbers --> */}

                <Numbers title={'All numbers'} number={this.state.number} />
                {/* <!-- Numbers --> */}

                <Numbers title={'Just 17'} number={17} />
            </div>
        );
    }
}
export default App;
