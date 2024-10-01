import { useState } from "react";

interface ListGroupProps {
    btnColour: string;
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({
    btnColour,
    items,
    heading,
    onSelectItem,
}: ListGroupProps) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    function getClassName(index: number) {
        return selectedIndex === index
            ? "list-group-item active"
            : "list-group-item";
    }

    return (
        <>
            <h3>{heading}</h3>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={getClassName(index) + btnColour}
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
