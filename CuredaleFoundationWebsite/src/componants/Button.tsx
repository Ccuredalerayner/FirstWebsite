import { ReactNode } from "react";
import { useState } from "react";

interface ButtonProp {
    children: string;
    colour?: "primary" | "success";
    isPressed: (value: number) => void;
}

const Button = ({ children, colour = "primary", isPressed }: ButtonProp) => {
    return (
        <button className={"btn btn-" + colour} onClick={() => isPressed(1)}>
            {children}
        </button>
    );
};

export default Button;
