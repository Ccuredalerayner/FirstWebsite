import { ReactNode } from "react";

interface MainMenuProp {
    children: ReactNode[];
}

const MainMenu = ({ children }: MainMenuProp) => {
    return <div className="menu-buttons">{children}</div>;
};

export default MainMenu;
