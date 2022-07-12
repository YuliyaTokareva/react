import React, { Component } from "react";
import User from "./User.jsx";

class UserList extends Component {
    //let usersForSorting = users.slise();
    state = {
        sorting: null,
    };
    toggleSorting = () => {
        const newSorting = this.state.sorting === "asc" ? "desc" : "asc";
        this.setState({
            sorting: newSorting,
        });
    };
    render() {
        let usersList;
        if (this.state.sorting) {
            usersList = this.props.users
                .slise()
                .sort((a, b) =>
                    this.state.sorting === "asc" ? a.age - b.age : b.age - a.age
                );
        } else {
            usersList = this.props.users;
        }

        return (
            <div>
                <button className='btn' onClick={this.toggleSorting}>
                    {this.state.sorting || "-"}
                </button>
                <ul className='users'>
                    {this.props.users.map((user) => (
                        <User key={user.id} name={user.name} age={user.age} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default UserList;
//in User
// 1. in User take: name, age
//in UsersLis take users: users
// 2. render =><li><span>name</span>
//          <span>age</span></li>...
// 3. defoult button (text button '')
// 4. 1 click button => sort age up (text button asc)
// 5. 2 click button => sort age down (text button desc)
