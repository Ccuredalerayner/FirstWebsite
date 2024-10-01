import { useState, useEffect } from "react";
import MenuButton from "./componants/MenuButton";

function App() {
    const [colour, setcolour] = useState("white");
    const click = (colour: string) => {
        setcolour(colour);
    };

    useEffect(() => {
        document.body.style.backgroundColor = colour;
    }, [colour]);

    return (
        <div className="mx-auto p-2">
            <MenuButton onClick={click} />
        </div>
    );
}

export default App;
