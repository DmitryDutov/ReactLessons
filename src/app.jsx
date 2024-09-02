import { RestaurantPage } from "./components/restaurant-page/restaurant-page";
import { Layout } from "./components/layout/layout";
import "./App.css"

export const App = () => {
    return (
        <div id="doc">
            <Layout>
                <RestaurantPage title='restaurants app' />
            </Layout>
        </div>
    );
};
