import { useState, useEffect } from "react";
import MenuButton from "./componants/MenuButton";

function App() {
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

    useEffect(() => {
        document.body.style.backgroundColor = colour;
    }, [colour]);

    return (
        <div className="mx-auto p-2">
            <MenuButton btnColour={colour} onClick={toggleMenu}>
                {showMenu === false ? "O" : "X"}
            </MenuButton>
        </div>
    );
}

export default App;
