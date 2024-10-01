import ListGroup from "./componants/ListGroup";

function App() {
    let items = ["Cambridge", "Brigton", "Gwimpyvil", "Shropshire", "New York"];

    const headleSelectItem = (item: string) => {
        console.log(item);
    };

    return (
        <div>
            <ListGroup
                items={items}
                heading="RSVP"
                onSelectItem={headleSelectItem}
            />
        </div>
    );
}

export default App;
