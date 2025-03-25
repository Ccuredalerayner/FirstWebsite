import { useState, useEffect } from "react";
import Hamburger from "./componants/Hamburger";
import MainMenu from "./componants/MainMenu";
import Button from "./componants/Button";
import HamburgerMenu from "./componants/HamburgerMenu";
import Title from "./componants/Title";

function App() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
        console.log("H");
    };

    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="position-absolute backup-image">
                        <img src="src\images\shells_front_cover.jpg" className="img-fluid backup-image" alt="Responsive image" />
                    </div>
                    <style jsx="true">{`
                        .backup-image {
                            z-index: -1;
                            position: absolute;
                            display: block;
                            top: 0;
                            left: 0;
                            height: 100%;
                            width: 100%;
                            background-size: cover;
                            background-position: 0 0;
                        }
                        `}
                    </style>
                </div>
                <div className="row justify-content-start p-4">
                    <div
                        className="hamburger d-sm-block d-md-none col-4"
                        onClick={toggleHamburger}
                    >
                        <Hamburger isOpen={hamburgerOpen} />
                    </div>
                    <Title />
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
                <div className="row">
                    <div className="col">
                        <div className="second-image">
                            <img src="src\images\secondary-images\Stationery_by_the_guest_list -019 (1).jpg" className="img-fluid" alt="Responsive image" />
                        </div>
                        <style jsx="true">{`
                        .second-image {
                            z-index: -1;
                        }
                        `}
                        </style>
                    </div>
                    <div className="col">
                        <div className="second-image">
                            <img src="src\images\secondary-images\Stationery_by_the_guest_list -002.jpg" className="img-fluid" alt="Responsive image" />
                        </div>
                        <style jsx="true">{`
                        .second-image {
                            z-index: -1;
                        }
                        `}
                        </style>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
