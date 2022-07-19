import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends Component {
    state = {
        text: '',
        sorting: 0,
        inputValue: '',
        count: 0,
    };
    update = (inputText) => {
        this.setState({
            inputValue: inputText.target.value,
        });
        this.filtering;
    };

    filtering = () => {
        let usersArr = this.props.users;
        const filter =
            this.inputValue === ''
                ? usersArr
                : [...usersArr].filter((user) =>
                      user.name.toUpperCase().includes(this.state.inputValue.toUpperCase()),
                  );

        return filter;
    };

    render() {
        let newUserArr = this.filtering();
        let sortingCount = newUserArr.length;

        return (
            <div>
                <div className="filter">
                    <Filter
                        filterText={this.state.inputValue}
                        count={sortingCount}
                        onChange={this.update}
                    />
                </div>
                <ul className="users">
                    {newUserArr.map((user) => (
                        <User key={user.id} name={user.name} age={user.age} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default UsersList;
