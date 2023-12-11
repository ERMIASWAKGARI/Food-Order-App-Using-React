import React from 'react';
 //to manage the data or state of cart
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}

});
export default CartContext;