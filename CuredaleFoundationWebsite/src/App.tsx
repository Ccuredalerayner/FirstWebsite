import Button from "./componants/Button";

function App() {
    return (
        <div>
            <Button onClick={() => console.log("OUCH")}>DO NOT CLICK!</Button>
            <Button onClick={() => console.log("YAY!")}>Please click</Button>
        </div>
    );
}

export default App;
