import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { restaurants } from "/materials/mock.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const getRestInfo = (restaurant) => {

    return (
        <div>
            <h1>{restaurant.name}</h1>
            <h2>Menu:</h2>
            <ul>
                {
                    restaurant.menu.map
                    (
                        restMenu =>
                        (
                        <li key={restMenu.id}>{restMenu.name} = {restMenu.price}</li>
                        )
                    )
                }
            </ul>
            <h2>Reviews:</h2>
            <ul>
                {
                    restaurant.reviews.map
                    (
                        review =>
                        (
                        <li key={review.id}> Name: {review.user}, Text: {review.text}, Rate: {review.rating}</li>
                        )
                    )
                }
            </ul>
            <hr/>
        </div>
    );
};

root.render(
    createElement(
        "div", {}, restaurants.map((resto) => getRestInfo(resto))
    )
);

