import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { restaurants } from "/materials/mock.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//const names = restaurants.map(rest => rest.name);

//console.log(names);


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


 //root.render(
 //  createElement(
 //    "ul",
 //    { className: "someClass", style: { color: "red" } },
 //    [1, 2, 3, 4, 5].map((id) => createElement("li", {}, id))
 //  )
 //);


root.render(
    createElement(
        "div", {}, restaurants.map((resto) => getRestInfo(resto))
    )
);

