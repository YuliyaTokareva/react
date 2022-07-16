import React, { Component } from "react";

class Search extends Component {
    state = {
        value: "",
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    };
    search = (event) => {
        event.preventDefault();
        alert("Search text: " + this.state.value);
    };

    render() {
        return (
            <form className='search' onSubmit={this.search}>
                <input
                    type='text'
                    onChange={this.handleChange}
                    value={this.state.value}
                    className='search__input'
                />
                <button className='search__button'>Search</button>
            </form>
        );
    }
}

export default Search;

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