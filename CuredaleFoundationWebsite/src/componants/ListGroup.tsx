function ListGroup() {
    const items = [
        "Cambridge",
        "Brigton",
        "Gwimpyvil",
        "Shropshire",
        "New York",
    ];

    return (
        <>
            <h1>RSVP</h1>
            <ul className="list-group">
                {items.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
