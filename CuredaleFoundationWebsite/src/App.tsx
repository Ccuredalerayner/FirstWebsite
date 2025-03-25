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
            <div className="">
                <div className="position-absolute">
                    <div className="row justify-content-start p-4">
                        <div
                            className="hamburger d-sm-block d-md-none col-4"
                            onClick={toggleHamburger}
                        >
                            <Hamburger isOpen={hamburgerOpen} />
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col">
                            <Title />
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
                <div>
                    <div className="row">
                        <div className="backup-image">
                            <img src="src\images\shells_front_cover.jpg" className="img-fluid backup-image" alt="Responsive image" />
                        </div>
                        <style jsx="true">{`
                        .backup-image {
                            z-index: -1;
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
                    <div className="row p-0">
                        <div className="col p-0">
                            <div className="second-image padded-left-1">
                                <img src="src\images\secondary-images\bee_in_a_box.jpg" className="img-fluid" alt="left-1" />
                            </div>
                        </div>
                        <div className="col p-0">
                            <div className="second-image padded-right-1">
                                <img src="src\images\secondary-images\rsvp_save_stick.jpg" className="img-fluid" alt="right-1" />
                            </div>
                        </div>
                    </div>
                    <div className="row p-0">
                        <div className="col p-0">
                            <div className="second-image padded-left-2">
                                <img src="src\images\secondary-images\invites.jpg" className="img-fluid" alt="left-2" />
                            </div>
                        </div>
                        <div className="col p-0">
                            <div className="second-image padded-right-2">
                                <img src="src\images\secondary-images\blue_bee.jpg" className="img-fluid" alt="right-2" />
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx="true">{`
                        .second-image {
                            z-index: -1;
                        }
                        .padded-left-1 {
                            padding: 10px 5px 5px 10px;
                        }
                        .padded-right-1 {
                            padding: 10px 10px 5px 5px;
                        }
                            .padded-left-2 {
                            padding: 5px 5px 10px 10px;
                        }
                        .padded-right-2 {
                            padding: 5px 10px 10px 5px;
                        }
                    `}
                </style>
            </div>
        </>
    );
}

export default App;
