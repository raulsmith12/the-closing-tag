import React from 'react';
import { Container, Carousel, Col, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Container fluid className="px-0 py-0 mh-8">
                <Carousel fade controls={false} indicators={false} className="mh-8">
                    <Carousel.Item className="mh-8">
                        <img src="https://theclosingtag.com/img/banner-1.jpg" width="100%" height="auto" alt="Slide 1" />
                        <Carousel.Caption style={{ top: '15%', left: '5%', width: '45%' }}>
                            <h3 className="display-4">Welcome to the new Closing Tag Website. Feel free to take a look around.</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="mh-8">
                        <img src="https://theclosingtag.com/img/banner-2.jpg" width="100%" height="auto" alt="Slide 2" />
                        <Carousel.Caption style={{ top: '15%', left: '5%', width: '45%' }}>
                            <h3 className="display-4">Raul takes a trip down memory lane with a "Best of" Episode on Episode 21, available now!</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="mh-8">
                        <img src="https://theclosingtag.com/img/banner-3.jpg" width="100%" height="auto" alt="Slide 3" />
                        <Carousel.Caption style={{ top: '15%', left: '5%', width: '45%' }}>
                            <h3 className="display-4">Relive the iconic interview with McClain Lindquist (The Tell-Tale Heart) on Episode 14</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <Row className="text-center">
                <Col md={4}>
                    <h3><a href="https://www.facebook.com/theclosingtag" target="_blank" rel="noreferrer">Visit Our<br />Facebook Page</a></h3>
                </Col>
                <Col md={4}>
                    <h3><a href="https://www.youtube.com/channel/UCamH_R6E51xpgM6AcdKvxVQ" target="_blank" rel="noreferrer">Visit Our<br />YouTube Page</a></h3>
                </Col>
                <Col md={4}>
                    <h3><a href="https://discord.gg/N7q8NTBe6u" target="_blank" rel="noreferrer">Come Join Our<br />Discord Group!</a></h3>
                </Col>
            </Row>
            <h2 className="display-3 text-center">We are on most of the major podcast platforms, including:</h2>
            <Row>
                <Col md={3}><img src="https://theclosingtag.com/img/apple-podcasts.jpg" width="100%" alt="Apple Podcasts" /></Col>
                <Col md={3}><img src="https://theclosingtag.com/img/google-podcasts.jpg" width="100%" alt="Google Podcasts" /></Col>
                <Col md={3}><img src="https://theclosingtag.com/img/stitcher.jpg" width="100%" alt="Stitcher" /></Col>
                <Col md={3}><img src="https://theclosingtag.com/img/anchor.jpg" width="100%" alt="Anchor by Spotify" /></Col>
            </Row>
            <h2 className="text-center">and more!</h2>
        </div>
    )
}

export default Home;