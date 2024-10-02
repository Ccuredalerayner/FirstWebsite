import { ReactNode } from "react";
import { useState } from "react";

interface ButtonProp {
    children: string;
    isPressed: (value: boolean) => void;
}

const Button = ({ children, isPressed }: ButtonProp) => {
    return (
        <>
            <button className={"btn menu-btn"} onClick={() => isPressed(true)}>
                {children}
            </button>
            <style jsx="true">
                {`
                    .menu-btn {
                        background-color: white;
                        color: black;
                        font-family: serif;
                    }

                    .menu-btn:hover {
                        border: white;
                        text-decoration: underline;
                    }

                    .menu-btn:focus {
                        border: white;
                    }
                `}
            </style>
        </>
    );
};

export default Button;
