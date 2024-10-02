import Button from "./Button";

const MainMenu = () => {
    return (
        <div>
            <Button isPressed={() => console.log("Home")}>Home</Button>
            <Button isPressed={() => console.log("Shop")}>Shop</Button>
            <Button isPressed={() => console.log("Enquire")}>Enquire</Button>
            <Button isPressed={() => console.log("Help")}>Help</Button>
        </div>
    );
};

export default MainMenu;
