export const Restaurant = ({id, name}) => {
    return (
            <section> 
                <h2 key={id}> {name} </h2>
                {/* <h3>Menu:</h3>
                <div> 
                    {menu.map((text) => (
                        <li>{text}</li>
                    ))} 
                </div>
                <h3>Review:</h3>
                <div> 
                    {reviews.map((rev) => (
                        <li>{rev}</li>
                    ))} 
                </div> */}
            </section>
    );
};
