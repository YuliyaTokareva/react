import React, { Component } from "react";
import Transaction from "./Transaction.jsx";

class TransactionsList extends Component {
    render() {
        return (
            <ul className='transactions'>
                {this.props.transactions.map((transactions) => (
                    <Transaction
                        key={transactions.id}
                        from={transactions.from}
                        to={transactions.to}
                        amount={transactions.amount}
                        rate={transactions.rate}
                        time={transactions.time}
                    />
                ))}
            </ul>
        );
    }
}

export default TransactionsList;
//in User
// 1. in User take: name, age
//in UsersLis take users: users
// 2. render =><li><span>name</span>
//          <span>age</span></li>...
// 3. defoult button (text button '')
// 4. 1 click button => sort age up (text button asc)
// 5. 2 click button => sort age down (text button desc)
