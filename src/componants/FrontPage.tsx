import { ReactNode } from "react";
import ImageCarousel from "./ImageCarousel";

const FrontPage = () => {
    return (
        <>
            <div>
                <div className="row p-0">
                    <div className="col p-0">
                        <div className="second-image padded-left-1">
                            <img src=".\images\front-page\019_bee_in_a_box.jpg" className="img-fluid" alt="left-1" />
                        </div>
                    </div>
                    <div className="col p-0">
                        <div className="second-image padded-right-1">
                            <img src=".\images\front-page\057_pink_pen_flower.jpg" className="img-fluid" alt="right-1" />
                        </div>
                    </div>
                </div>
                <div className="row p-0">
                    <div className="col p-0">
                        <div className="second-image padded-left-2">
                            <img src=".\images\front-page\038_invites.jpg" className="img-fluid" alt="left-2" />
                        </div>
                    </div>
                    <div className="col p-0">
                        <div className="second-image padded-right-2">
                            <img src=".\images\front-page\066_lavender_candle.jpg" className="img-fluid" alt="right-2" />
                        </div>
                    </div>
                </div>
                <div className="row p-0">
                    <div className="col p-0 double-image-container">
                        <div className="double-image">
                            <img src=".\images\front-page\045_board_clock.jpg" className="img-fluid" alt="left-3" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="row p-0">
                            <div className="second-image padded-right-3">
                                <img src=".\images\front-page\042_three_leaf.jpg" className="img-fluid" alt="right-3" />
                            </div>
                        </div>
                        <div className="row p-0">
                            <div className="second-image padded-right-3">
                                <img src=".\images\front-page\022_gold_scissors_everything.jpg" className="img-fluid" alt="right-4" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row image-carousel">
                    <ImageCarousel />
                </div>
                <style jsx="true">{`
                .image-carousel {
                    /*  top, right, bottom, left: */
                    padding: 5px 10px 5px 10px;
                }
                `}
                </style>
            </div>
            <style jsx="true">{`
                .second-image {
                    z-index: -1;
                }
                .double-image {
                    padding: 0px 5px 5px 0px;
                }
                .double-image-container{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .padded-left-1 {
                    padding: 10px 5px 5px 10px;
                }
                .padded-right-1 {
                    padding: 10px 10px 5px 5px;
                }
                .padded-left-2 {
                    padding: 5px 5px 10px 10px;
                }
                .padded-right-2 {
                    padding: 5px 10px 5px 5px;
                }
                .padded-right-3 {
                    padding: 0px 0px 10px 5px;
                }
            `}
            </style>
        </>
    );
};

export default FrontPage;
