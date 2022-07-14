import React, { Component } from "react";

class Dimensions extends Component {
    state = {
        width: null,
        height: null,
    };

    componentDidMount() {
        window.addEventListener("resize", this.onResize);
        const { innerWidth, innerHeight } = window;
        this.setDimentions(innerWidth, innerHeight);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize);
    }
    onResize = (e) => {
        const { innerWidth, innerHeight } = e.target;
        this.setDimentions(innerWidth, innerHeight);
        document.title = `${innerWidth} x ${innerHeight}`;
    };
    setDimentions = (width, height) => {
        this.setState({
            width,
            height,
        });
        document.title = `${width} x ${height}`;
    };

    render() {
        return (
            <div className='dimensions'>
                {`${this.state.width} - ${this.state.height}`}
            </div>
        );
    }
}

export default Dimensions;

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
