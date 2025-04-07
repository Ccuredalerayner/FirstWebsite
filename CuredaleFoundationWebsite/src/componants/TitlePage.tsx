import Title from "./Title";

const TitlePage = () => {
    return (
        <>
            <div className="row position-relative">
                <img src="src\images\shells_front_cover.jpg" className="img-fluid backup-image" alt="Responsive image" />
                <div className="centered position-absolute">
                    <Title />
                </div>
                <style jsx="true">{`
                    .centered {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        text-align: center
                        }
                `}
                </style>
            </div>
        </>
    );
};

export default TitlePage;