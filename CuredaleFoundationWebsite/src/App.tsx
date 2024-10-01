import Button from "./componants/Button";

function App() {
    return (
        <div>
            <Button text="DO NOT CLICK!" onClick={() => console.log("OUCH")} />
            <Button text="Please click" onClick={() => console.log("YAY!")} />
        </div>
    );
}

export default App;
