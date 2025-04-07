import { useState, useEffect } from "react";
import Hamburger from "./componants/Hamburger";
import MainMenu from "./componants/MainMenu";
import Button from "./componants/Button";
import HamburgerMenu from "./componants/HamburgerMenu";
import Title from "./componants/Title";
import ImageCarousel from "./componants/ImageCarousel";
import FrontPage from "./componants/FrontPage";

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
                <div>
                    <div className="row position-relative">
                        <img src="src\images\shells_front_cover.jpg" className="img-fluid backup-image" alt="Responsive image" />
                        <div className="centered position-absolute">
                            <Title />
                        </div>
                        <style jsx="true">{`
                                .centered {
                                    position: absolute;
                                    top: 50%;
                                    left: 50%;
                                    transform: translate(-50%, -50%);
                                    text-align: center
                                    }
                        `}
                        </style>
                    </div>
                    <div className="row text-center">
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
                    </div>
                    <FrontPage />
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
