import React, { Component } from 'react';
import CartTitle from './CartTitle.jsx';
import ProductsList from './ProductsList.jsx';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: [
                {
                    id: '1',
                    name: 'iPhone 11',
                    price: 999,
                },
                {
                    id: '2',
                    name: 'iPad Pro',
                    price: 799,
                },
            ],
        };
    }
    render() {
        //console.log(userData);
        return (
            <div className="column">
                {/* <!-- CartTitle --> */}
                <CartTitle count={this.state.cartItems.length} userName={this.props.userName} />
                {/* <!-- ProductsList --> */}
                <ProductsList cartItems={this.state.cartItems} />
            </div>
        );
    }
}
export default ShoppingCart;
