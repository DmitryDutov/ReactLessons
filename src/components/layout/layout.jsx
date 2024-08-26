import { Footer } from "../footer/footer"
import { Header } from "../header/header";
import { ProgressBar } from "../progreessbar/progressbar";

export const Layout = ({ children }) => {
    return (
        <div>
            <ProgressBar />
            <Header />
            {children}
            <Footer />
        </div>
    );
};
