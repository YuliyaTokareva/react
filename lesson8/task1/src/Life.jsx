import React, { Component } from "react";

class Life extends Component {
    constructor(props) {
        super(props);

        console.log("good place to create state");
    }
    componentDidMount() {
        console.log("API calls, subscriptions");
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
