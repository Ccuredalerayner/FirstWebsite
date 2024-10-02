import { useState, useEffect } from "react";
import Hamburger from "./componants/Hamburger";
import MainMenu from "./componants/MainMenu";
import Button from "./componants/Button";
import HamburgerMenu from "./componants/HamburgerMenu";

function App() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
        console.log("H");
    };

    return (
        <>
            <div className="container text-center">
                <div className="row justify-content-start p-4">
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
                <div className="menu row d-none d-sm-none d-md-block">
                    <MainMenu>
                        <Button isPressed={() => console.log("About")}>
                            About
                        </Button>
                        <Button isPressed={() => console.log("Portfolio")}>
                            Portfolio
                        </Button>
                        <Button isPressed={() => console.log("Gallary")}>
                            Gallary
                        </Button>
                        <Button isPressed={() => console.log("Contact")}>
                            Contact
                        </Button>
                    </MainMenu>
                </div>
                <div className="hamburger-menu d-sm-block d-md-none">
                    {hamburgerOpen && (
                        <HamburgerMenu>
                            <Button isPressed={() => console.log("About")}>
                                About
                            </Button>
                            <Button isPressed={() => console.log("Portfolio")}>
                                Portfolio
                            </Button>
                            <Button isPressed={() => console.log("Gallary")}>
                                Gallary
                            </Button>
                            <Button isPressed={() => console.log("Contact")}>
                                Contact
                            </Button>
                        </HamburgerMenu>
                    )}
                </div>
            </div>
        </>
    );
}

export default App;
