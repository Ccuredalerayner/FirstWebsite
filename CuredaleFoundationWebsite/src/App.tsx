import { useState, useEffect } from "react";
import Hamburger from "./componants/Hamburger";

function App() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
        console.log("H");
    };

    return (
        <>
            <div
                className="hamburger d-md-none d-lg-block"
                onClick={toggleHamburger}
            >
                <Hamburger isOpen={hamburgerOpen} />
            </div>
        </>
    );
}

export default App;
