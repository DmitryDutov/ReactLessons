import {restaurants} from "./constants/mock.js"
import { Restaurant } from "../restaurant/restaraunt.jsx";

export const RestaurantList = ({title}) => {
  return (
    <div>
        <div>{title}</div>

        <>
            {restaurants.map(({id, name}) => (
                <Restaurant id={id} name={name}/>
            ))}
        </>
      
    </div>
  );
};
