import { Counter } from "../counter/counter";

export const Menu = ({ menu }) => {
    return (
        <div>
            {menu?.map((item) => (
                <li key={item.id}>
                    {item.name} - ${item.price}
                    <Counter min={0} max={5} />
                </li>
            ))}
        </div>
    );
};
