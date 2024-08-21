import React from "react";
import {restaurants} from "./constants/mock.js"

export const App = ({title}) => {
    return (
            <React.Fragment>
                <h1>{title}</h1>
                <div>{restaurants.length}</div>

                <ul>
                {restaurants.map(({ id, name, menu, reviews}) => 
                        {
                            return ( 
                                <li key={id}> 
                                    <h2>
                                        {name}
                                    </h2>
                                    <h3>Menu:</h3>
                                    <div>
                                        {menu.map(
                                                restMenu =>
                                                (
                                                    <li key={restMenu.id}>{restMenu.name} = {restMenu.price}</li>
                                                )
                                            )
                                        }
                                    </div>
                                    <h3>Review:</h3>
                                    <div>
                                        {reviews.map(
                                                restReviw =>
                                                (
                                                    <li key={restReviw.user}>{restReviw.text} = {restReviw.rating}</li>
                                                )
                                            )
                                        }
                                    </div>
                                </li>
                            );
                        }
                    )
                }
                </ul>
            </React.Fragment>
    );

};

