import { Fragment } from "react"
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) =>{
    return (
    <Fragment>
            <header className={classes.header}>
                <p>ReactMeals</p>
                <HeaderCartButton onClick = {props.onShowcart}/>
            </header>
            <div className={classes['main-image']}>
                <img src="https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true"  alt="A table full of Delicious food" />
            </div>
    </Fragment>
    );
};

export default Header;