interface MenuButtonProp {
    onClick: () => void;
}

const MenuButton = ({ onClick }: MenuButtonProp) => {
    return (
        <div className={"btn btn-primary"} onClick={() => onClick()}>
            O
        </div>
    );
};

export default MenuButton;
