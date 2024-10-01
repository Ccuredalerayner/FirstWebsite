interface MenuButtonProp {
    btnColour: string;
    children: string;
    onClick: () => void;
}

const MenuButton = ({ btnColour, children, onClick }: MenuButtonProp) => {
    return (
        <div className={"btn btn-" + btnColour} onClick={() => onClick()}>
            {children}
        </div>
    );
};

export default MenuButton;
