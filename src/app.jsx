import {restaurants} from "./constants/mock.js"

export const App = ({title}) => {
    return (
            <div>
                <h1>{title}</h1>
                <div>{restaurants.length}</div>
                <ul>

                {restaurants.map(({ name }) => 
                    {
                        return ( 
                            <li key={name}> {name} </li>
                        );
                    }
                )
            }

                </ul>
            </div>
    );

};

