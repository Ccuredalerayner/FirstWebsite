import MainMenuObject from "./MainMenuObject";
import Button from "./Button";

const Title = () => {
    return (
        <>
            <div className="row text-center">
                <div className="menu row d-none d-sm-none d-md-block">
                    <MainMenuObject>
                        <Button isPressed={() => console.log("About")}>
                            About
                        </Button>
                        <Button isPressed={() => console.log("Portfolio")}>
                            Portfolio
                        </Button>
                        <Button isPressed={() => console.log("Gallary")}>
                            Gallary
                        </Button>
                        <Button isPressed={() => console.log("Contact")}>
                            Contact
                        </Button>
                    </MainMenuObject>
                </div>
            </div>
        </>
    );
};

export default Title;