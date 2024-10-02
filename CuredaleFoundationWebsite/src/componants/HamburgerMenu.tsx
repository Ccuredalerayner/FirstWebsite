import { ReactNode } from "react";

interface HamburgerMenuProp {
    children: ReactNode[];
}

const HamburgerMenu = ({ children }: HamburgerMenuProp) => {
    return (
        <>
            <div className="list-group">{children}</div>
            <style jsx="true">{`
                .hamburger-menu-btn {
                }
            `}</style>
        </>
    );
};

export default HamburgerMenu;
