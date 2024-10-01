import { ReactNode } from "react";

interface AlertProp {
    children: ReactNode;
    onDismiss: (value: boolean) => void;
}

const Alert = ({ children, onDismiss }: AlertProp) => {
    return (
        <div className="alert alert-primary alert-dismissible fade show">
            {children}
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => onDismiss(false)}
            ></button>
        </div>
    );
};

export default Alert;
