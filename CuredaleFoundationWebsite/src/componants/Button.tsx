interface ButtonProp {
    text: string;
    onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProp) => {
    return (
        <div className="btn btn-primary" onClick={onClick}>
            {text}
        </div>
    );
};

export default Button;
