import React from "react";

export const restaurant = ({id, name, menu, reviews}) => {
    return (
            <React.Fragment key={id}> 
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
            </React.Fragment>
    )
}
