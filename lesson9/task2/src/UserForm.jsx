import React, { Component } from 'react';

class UserForm extends Component {
    state = {
        name: '',
        student: '',
        occupation: '',
        about: '',
    };

    handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const val = type === 'checkbox' ? checked : value;
        this.setState({
            [name]: val,
        });
    };

    render() {
        // console.log();
        return (
            <form
                className="login-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    this.props.onSubmit(this.state);
                }}
            >
                <h1 className="form-title">Profile</h1>
                <div className="form-control">
                    <label className="form-label" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="form-input"
                        type="text"
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-control">
                    <label className="form-label" htmlFor="student">
                        Student
                    </label>
                    <input
                        className="form-input"
                        type="checkbox"
                        id="student"
                        name="student"
                        value={this.state.student}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-control">
                    <label className="form-label" id="occupation" htmlFor="occupation">
                        Occupation
                    </label>
                    <select
                        name="occupation"
                        className="form-input"
                        value={this.state.occupation}
                        onChange={this.handleChange}
                    >
                        <option value="london">London</option>
                        <option value="new-york">New York</option>
                        <option value="sidney">Sidney</option>
                        <option value="berlin">Berlin</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="form-label" id="about" htmlFor="about">
                        About
                    </label>
                    <textarea
                        name="about"
                        className="form-input"
                        value={this.state.about}
                        onChange={this.handleChange}
                    />
                </div>
                <button className="submit-button" type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default UserForm;

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
