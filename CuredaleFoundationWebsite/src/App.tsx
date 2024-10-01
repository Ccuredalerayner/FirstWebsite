import Alert from "./componants/Alert";
import Button from "./componants/Button";
import { useState } from "react";

function App() {
    const [buttonPressed, setButtonPressed] = useState(0);

    return (
        <div>
            {buttonPressed === 1 && (
                <Alert onDismiss={setButtonPressed}>This is and alert</Alert>
            )}
            <Button isPressed={setButtonPressed}> Alert</Button>
        </div>
    );
}

export default App;
