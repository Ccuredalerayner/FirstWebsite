import { useState, useEffect } from "react";
import Hamburger from "./componants/Hamburger";
import Button from "./componants/Button";
import HamburgerMenu from "./componants/HamburgerMenu";
import FrontPage from "./componants/FrontPage";
import TitlePage from "./componants/TitlePage";
import MainMenu from "./componants/MainMenu";

function App() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
        console.log("H");
    };

    return (
        <>
            <div className="body">
                <div className="position-absolute">
                    <div className="row justify-content-start p-4">
                        <div
                            className="hamburger d-sm-block d-md-none col-4"
                            onClick={toggleHamburger}
                        >
                            <Hamburger isOpen={hamburgerOpen} />
                        </div>
                    </div>
                </div>
                <div>
                    <TitlePage />
                    <div className="row">
                        <div className="hamburger-menu centered d-sm-block d-md-none">
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
                    {!hamburgerOpen && (
                        <>
                            <MainMenu />
                            <FrontPage />
                        </>
                    )}

                </div>
            </div>
            <style jsx="true">{`
                    .body {
                        overflow-y: hidden;
                        overflow-x: hidden;
                    }
                `}
            </style>
        </>
    );
}

export default App;
