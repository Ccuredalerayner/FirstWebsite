import Alert from "./componants/Alert";
import Button from "./componants/Button";
import { useState } from "react";

function App() {
    const [buttonPressed, setButtonPressed] = useState(false);

    return (
        <div>
            {buttonPressed === true && (
                <Alert onDismiss={setButtonPressed}>This is and alert</Alert>
            )}
            <Button isPressed={setButtonPressed}> Alert</Button>
        </div>
    );
}

export default App;
