import { useState, useEffect } from "react";
import MenuButton from "./componants/MenuButton";
import ListGroup from "./componants/ListGroup";

function App() {
    return (
        <div className="col-4">
            <MenuButton
                btnColour={"primary"}
                onClick={() => console.log("pressed")}
            >
                {"O"}
            </MenuButton>
        </div>
    );
}

export default App;
