import React, { Component } from 'react';

class EvenNumbers extends Component {
    shouldComponentUpdate(nextProps) {
        //this.props.numbers=70
        //nextProps.numbers=71
        return nextProps.number % 2 === 0;
    }
    render() {
        return (
            <div className="number">
                <span className="number__title">{this.props.title}</span>
                <span className="number__value">{this.props.number}</span>
            </div>
        );
    }
}

export default EvenNumbers;

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
