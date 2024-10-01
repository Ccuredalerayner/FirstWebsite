function ListGroup() {
    let items = ["Cambridge", "Brigton", "Gwimpyvil", "Shropshire", "New York"];

    return (
        <>
            <h1>RSVP</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item) => (
                    <li className="list-group-item" key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
