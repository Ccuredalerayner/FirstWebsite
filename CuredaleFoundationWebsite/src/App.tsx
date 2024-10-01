import Button from "./componants/Button";

function App() {
    return (
        <div>
            <Button colour="primary" onClick={() => console.log("OUCH")}>
                DO NOT CLICK!
            </Button>
            <Button colour="success" onClick={() => console.log("YAY!")}>
                Please click
            </Button>
        </div>
    );
}

export default App;
