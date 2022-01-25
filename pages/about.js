import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <h1 className="display-4">About the Closing Tag</h1>
            <Row className="text-left px-2">
                <Col className="col-9">
                    <h5>Google defines a "closing tag" as the following:</h5>
                    <Card body bg="light" className="my-5">
                        An opening tag begins a section of page content, and a closing tag ends it. For example, to markup a section of text as a paragraph, you would open the paragraph with an opening paragraph tag (&lt;p&gt;) and close it with a closing paragraph tag (&lt;/p&gt;) (closing tags always proceed the element with a /).
                    </Card>
                    <p>A common web developer mistake is forgetting to include a closing tag in the code, thus breaking the code and crashing the site. When coming up with a name and sign-off, "don't forget to include your closing tags" just felt natural and right.</p>
                    <p>The Closing Tag combines dev and tech talk with things that matter to developers and even non-developers: sports, politics, current events, life tips, and entertainment. Every once in a while, somebody else will come on and offer a different topic or perspective.</p>
                    <p>We've interviewed a variety of other podcast hosts, sports fans, technology enthusiasts, and even a local movie producer!</p>
                    <p>We are on most major podcasting platforms, including:</p>
                    <Container>
                        <Row>
                            <Col md={3}><img src="https://theclosingtag.com/img/apple-podcasts.jpg" width="100%" alt="Apple Podcasts" /></Col>
                            <Col md={3}><img src="https://theclosingtag.com/img/google-podcasts.jpg" width="100%" alt="Google Podcasts" /></Col>
                            <Col md={3}><img src="https://theclosingtag.com/img/stitcher.jpg" width="100%" alt="Stitcher" /></Col>
                            <Col md={3}><img src="https://theclosingtag.com/img/anchor.jpg" width="100%" alt="Anchor by Spotify" /></Col>
                        </Row>
                    </Container>
                    <p>Additionally, every video episode of the podcast is available for free on both YouTube and Facebook.</p>
                </Col>
                <Col className="col-3">
                    <img src="https://theclosingtag.com/img/raul_smith.jpg" width="100%" alt="Raul Smith" />
                    <p className="text-center">Raul Smith, host of the Closing Tag podcast, is a 13-year veteran in the web development industry, a graphic logo designer, a game streamer, sports enthusiast, and a highly opinionated individual. He is also the president, CEO, co-founder, and lead developer for GalacticBlue, the head organizer for The Blue Rose Affiliation, host of GameStream, and the lead technical advisor for Johlar Inc.</p>
                </Col>
            </Row>
        </div>
    )
}

export default About;