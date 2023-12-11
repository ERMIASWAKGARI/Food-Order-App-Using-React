import { useContext } from 'react';
import MealItemForm from './MealItemForm';
import classes from './MealsItem.module.css';
import CartContext from '../../../Store/cart-context';
const MealsItem = (props) => {
   const cartCxt = useContext(CartContext);

    const price= `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount =>{
      cartCxt.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
      });

    };

    return(
  <li className={classes.meal}> 
    <div>
        <div><h3>{props.name}</h3>
             <div className={classes.description}>{props.description}</div>
             <div className={classes.price}>{price}</div>
        </div>
        <MealItemForm  id = {props.id} onAddToCart= {addToCartHandler} />
    </div>
 </li>
    )
};
export default MealsItem;