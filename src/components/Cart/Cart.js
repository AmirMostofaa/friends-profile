import React from 'react';
import './Cart.css';

const Cart = (props) => {
     const cart = props.cart;
    console.log(cart);

    const total = cart.reduce((total, salary) => total + salary.yearlySalary, 0)
    return (
        <div className="cart-area">
            
            <h4>Friend Added: <br></br> {cart.length}</h4>
            <br></br>
            <br></br>
            <h4>Total Salary:<br></br> ${total} </h4>
           
            
        </div>
    );
};

export default Cart;