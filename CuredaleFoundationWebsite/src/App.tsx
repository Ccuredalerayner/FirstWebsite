import { useState, useEffect } from "react";
import MenuButton from "./componants/MenuButton";

function App() {
    const [colour, setcolour] = useState("white");
    const toggleMenu = () => {
        if (colour === "white") {
            setcolour("grey");
        } else {
            setcolour("white");
        }
    };

    useEffect(() => {
        document.body.style.backgroundColor = colour;
    }, [colour]);

    return (
        <div className="mx-auto p-2">
            <MenuButton onClick={toggleMenu} />
        </div>
    );
}

export default App;
