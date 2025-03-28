import { useState, useEffect } from "react";
import MenuButton from "./componants/MenuButton";
import ListGroup from "./componants/ListGroup";

function App() {
    const listGroupItemsHomePage = ["Designes", "Stationery"];
    const listGroupItemsMenu = ["Home", "Help", "FAQ"];
    const [showMenu, setShowMenu] = useState(false);
    const [colour, setcolour] = useState("white");
    const toggleMenu = () => {
        if (showMenu === false) {
            setcolour("grey");
            setShowMenu(true);
        } else {
            setcolour("white");
            setShowMenu(false);
        }
    };
    const headleSelectListGroupItem = (item: string) => {
        console.log(item);
    };

    useEffect(() => {
        document.body.style.backgroundColor = colour;
    }, [colour]);

    return (
        <>
            <div className="container text-center">
                <div className="row justify-content-start">
                    <div className="col-4">
                        <MenuButton btnColour={colour} onClick={toggleMenu}>
                            {showMenu === false ? "O" : "X"}
                        </MenuButton>
                    </div>
                    <div className="col-4">
                        <div className="col align-self-start">
                            <h1>RSVP</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div>
                    {showMenu === false && (
                        <ListGroup
                            btnColour={colour}
                            items={listGroupItemsHomePage}
                            heading="Home Page"
                            onSelectItem={headleSelectListGroupItem}
                        />
                    )}
                </div>
                <div>
                    {showMenu === true && (
                        <ListGroup
                            btnColour={colour}
                            items={listGroupItemsMenu}
                            heading="Menu"
                            onSelectItem={headleSelectListGroupItem}
                        />
                    )}
                </div>
            </div>
        </>
    );
}

export default App;
