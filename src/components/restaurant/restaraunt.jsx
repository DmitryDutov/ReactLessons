import { Reviews } from "../restaraunt-view/restaraunt-view"
import { Menu } from "../restaraunt-menu/restaraunt-menu"

export const Restaurant = ({ name, menu, reviews }) => {
    if (!name) {
        return null;
    }

    return (
        <section>
            <h2>{name}</h2>
            <h3>Menu</h3>
            {menu?.length ? <Menu menu={menu} /> : <div>Empty menu</div>}
            <h3>Review</h3>
            {reviews?.length ? <Reviews reviews={reviews} /> : <div>Empty review</div>}
        </section>
    );
};
