interface ButtonProp {
    text: string;
    onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProp) => {
    return (
        <button className="btn btn-primary" onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
