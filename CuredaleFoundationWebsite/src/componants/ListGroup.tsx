function ListGroup() {
    let items = ["Cambridge", "Brigton", "Gwimpyvil", "Shropshire", "New York"];

    return (
        <>
            <h1>RSVP</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className="list-group-item"
                        key={item}
                        onClick={() => console.log(item, index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
