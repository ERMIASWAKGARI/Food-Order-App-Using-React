import { useContext } from 'react';
import classes from './Header.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Store/cart-context';
const HeaderCartButton = props =>{
    const cartCxt=useContext(CartContext);
    const numberOfCartItems = cartCxt.items.reduce((curNumber, item)=>{
        return curNumber = curNumber + item.amount;
    },0);


    return(
     <button className={classes.button} onClick = {props.onClick}>
        <span className={classes.icon}>
           <CartIcon />
        </span>
        <span >Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
    );
};
export default HeaderCartButton;