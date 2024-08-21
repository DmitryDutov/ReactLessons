import {restaurants} from "./constants/mock.js"

export const App = ({title}) => {
    return (
            <div>
                <h1>{title}</h1>
                <div>{restaurants.length}</div>

                {restaurants.map(({name}) => 
                        {
                            <ul>
                                <li>{name} </li>
                            </ul>
                        }
                    )
                }

            </div>
    );

};

