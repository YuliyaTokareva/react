import React, { Component } from "react";
import User from "./User.jsx";
import Pagination from "./Pagination.jsx";

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            pagination: 1,
            itemsPerPge: 3,
            toIterate: 0,
           
        };
        this.totalItems: this.props.users.length,
        this.totalPages: Math.ceil(this.props.users.length / 3),
    }

    showUserPetPage() {
        let arr = [];
        for (
            let i = this.state.toIterate;
            i < this.state.totalItems && i <= this.state.toIterate + 2;
            i++
        ) {
            // console.log(this.state.totalItems);
            // console.log(this.state.toIterate);
            arr.push(this.props.users[i]);
        }
        console.log(arr);
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
        // const cyrentItemsShow =
        //     (this.state.totalItems - this.state.pagination * 3) % 3 === 0;
        // let totalPages = Math.ceil(
        //     this.state.totalItems / this.state.itemsPerPge
        // );
        console.log(this.props.users.length);
        return (
            <div>
                {/* <div className='pagination'>
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
                        disabled={
                            this.state.pagination === totalPages ||
                            totalPages === 0
                        }
                    >
                        {this.state.pagination === totalPages ||
                        totalPages === 0
                            ? ""
                            : "→"}
                    </button>
                </div> */}
                <Pagination
                    goPrev={this.goPrev}
                    goNext={this.goNext}
                    currentPage={this.state.pagination}
                    totalItems={this.state.totalPages}
                />
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
