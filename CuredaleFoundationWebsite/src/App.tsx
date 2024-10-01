import ListGroup from "./componants/ListGroup";

function App() {
    let items = ["Cambridge", "Brigton", "Gwimpyvil", "Shropshire", "New York"];

    return (
        <div>
            <ListGroup items={items} heading="RSVP" />
        </div>
    );
}

export default App;
