interface ButtonProp {
    children: string;
    colour?: "primary" | "success";
    onClick: () => void;
}

const Button = ({ children, colour = "primary", onClick }: ButtonProp) => {
    return (
        <button className={"btn btn-" + colour} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
