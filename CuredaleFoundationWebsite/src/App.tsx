import { useState, useEffect } from "react";
import MenuButton from "./componants/MenuButton";
import ListGroup from "./componants/ListGroup";
import Hamburger from "./componants/Hamburger";

function App() {
    return (
        <div className="d-md-none d-lg-block">
            <Hamburger />
        </div>
    );
}

export default App;
