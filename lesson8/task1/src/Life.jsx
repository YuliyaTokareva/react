import React, { Component } from "react";

class Life extends Component {
    /////Показывается при первой загрузке
    constructor(props) {
        super(props);

        console.log("constructor: good place to create state");
    }
    componentDidMount() {
        console.log("componentDidMount: API calls, subscriptions");
    }
    shouldComponentUpdate(nextProps) {
        console.log(
            "shouldComponentUpdate(nextProps, nextState): decide to render or not to render"
        );
        return nextProps !== 0;
    }
    componentDidUpdate() {
        console.log(
            "componentDidUpdate(prevProps, prevState): some updates based on new props"
        );
    }
    componentWillUnmount() {
        console.log(
            "componentWillUnmount(): cleanup before DOM related to component will be removed"
        );
        //return this.state.text === 0;
    }

    render() {
        console.log("return React element to build DOM");
        return <div>{this.props.number}</div>;
    }
}

export default Life;

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
