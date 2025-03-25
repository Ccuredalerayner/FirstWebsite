import Carousel from 'react-bootstrap/Carousel';

function ImageCarousel() {
    return (
        <>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <div className="image">
                            <img src="src\images\carousel-images\stack-cards.jpg" className="img-fluid" alt="left-2" />
                        </div>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="image">
                            <img src="src\images\carousel-images\stack-cards.jpg" className="img-fluid" alt="left-2" />
                        </div>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="image">
                            <img src="src\images\secondary-images\invites.jpg" className="img-fluid" alt="left-2" />
                        </div>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default ImageCarousel;