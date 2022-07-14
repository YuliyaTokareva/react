import React, { Component } from "react";
import Clock from "./Clock.jsx";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        };
    }

    toggle = () => {
        this.setState({
            visible: !this.state.visible,
        });
    };
    render() {
        return (
            <div>
                <button onClick={this.toggle}>Toggle</button>
                <div>
                    {this.state.visible && (
                        <>
                            <Clock offset={0} location='London' />
                            <Clock offset={2} location='Kyiv' />
                            <Clock offset={-5} location='New York' />
                        </>
                    )}
                </div>
            </div>
        );
    }
}

export default App;

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
