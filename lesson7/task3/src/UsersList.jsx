import React, { Component } from "react";
import User from "./User.jsx";

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalItems: this.props.users.length,
            pagination: 1,
            itemsPerPge: 3,
            toIterate: 0,
        };
    }

    showUserPetPage() {
        let arr = [];
        for (
            let i = this.state.toIterate;
            i < this.state.totalItems && i <= this.state.toIterate + 2;
            i++
        ) {
            arr.push(this.props.users[i]);
        }
        return arr;
    }
    goNext = () => {
        this.setState({
            pagination: this.state.pagination + 1,
            toIterate: this.state.toIterate + 3,
        });
    };
    goPrev = () => {
        this.setState({
            pagination: this.state.pagination - 1,
            toIterate: this.state.toIterate - 3,
        });
    };
    render() {
        const totalPages = Math.ceil(
            (this.props.users.length + 1) / this.state.itemsPerPge
        );
        console.log(totalPages);
        return (
            <div>
                <div className='pagination'>
                    <button
                        className='btn'
                        onClick={this.goPrev}
                        disabled={this.state.pagination === 1}
                    >
                        {this.state.pagination !== 1 ? "←" : ""}
                    </button>
                    <span className='pagination__page'>
                        {this.state.pagination}
                    </span>
                    <button
                        className='btn'
                        onClick={this.goNext}
                        disabled={this.state.pagination === totalPages}
                    >
                        {this.state.pagination === totalPages ? "" : "→"}
                    </button>
                </div>
                <ul className='users'>
                    {this.showUserPetPage().map((user) => (
                        <User key={user.id} name={user.name} age={user.age} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default UsersList;
