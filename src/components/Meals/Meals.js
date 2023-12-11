import { Fragment } from "react";
import MealsSummary from "./MealsSummery";
import AvailableMeals from "./AvailableMeals";

const Meals = () =>{
    return(
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>

    );
};
export default Meals;