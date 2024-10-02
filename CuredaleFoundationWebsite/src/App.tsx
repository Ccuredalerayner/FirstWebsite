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
            <div className="container text-center">
                <div className="row justify-content-start">
                    <div
                        className="hamburger d-sm-block d-md-none col-4"
                        onClick={toggleHamburger}
                    >
                        <Hamburger isOpen={hamburgerOpen} />
                    </div>
                    <div>
                        <h1>RSVP</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
