import { useState, useEffect } from "react";
import MenuButton from "./componants/MenuButton";
import ListGroup from "./componants/ListGroup";

function App() {
    const listGroupItems = ["Apple", "Not Apple"];
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
            <div className="mx-auto p-2">
                <MenuButton btnColour={colour} onClick={toggleMenu}>
                    {showMenu === false ? "O" : "X"}
                </MenuButton>
            </div>
            <div>
                <ListGroup
                    btnColour={colour}
                    items={listGroupItems}
                    heading="List"
                    onSelectItem={headleSelectListGroupItem}
                />
            </div>
        </>
    );
}

export default App;
