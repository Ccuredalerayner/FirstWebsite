interface MenuButtonProp {
    onClick: (colour: string) => void;
}

const MenuButton = ({ onClick }: MenuButtonProp) => {
    return (
        <div className={"btn btn-primary"} onClick={() => onClick("grey")}>
            O
        </div>
    );
};

export default MenuButton;
