import { ReactNode } from "react";
import { useState } from "react";

interface ButtonProp {
    children: string;
    isPressed: (value: boolean) => void;
}

const Button = ({ children, isPressed }: ButtonProp) => {
    return (
        <>
            <button className={"menu-btn"} onClick={() => isPressed(true)}>
                {children}
            </button>
            <style jsx="true">
                {`
                    .menu-btn {
                        background-color: transparent;
                        color: black;
                        font-family: Roseritta;
                        font-size: 24px;
                        border-color: transparent;
                    }

                    .menu-btn:hover {
                        text-decoration: underline;
                    }
                `}
            </style>
        </>
    );
};

export default Button;
