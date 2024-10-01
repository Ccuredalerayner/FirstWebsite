function ListGroup() {
    let items = ["Cambridge", "Brigton", "Gwimpyvil", "Shropshire", "New York"];
    items = [];

    const getMessage = () => {
        return items.length == 0 ? <p>No item found</p> : null;
    };

    return (
        <>
            <h1>RSVP</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
