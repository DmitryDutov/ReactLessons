import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar} from "../progreessbar/progressbar.jsx"

export const Layout = ({ children }) => {
    return (
        <div>
            <ProgressBar/>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

