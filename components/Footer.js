import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CookieConsent from 'react-cookie-consent';

const Footer = () => {
    return (
        <Container fluid className="bg-light fixed-bottom pt-1">
            <Row>
                <Col>
                    <p align="center">&copy; {(new Date().getFullYear())} The Closing Tag. All Rights Reserved.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p align="center">
                        <a href="/">Home</a>&nbsp;|&nbsp;
                        <a href="/about">About</a>&nbsp;|&nbsp;
                        <a href="/contact">Contact</a>&nbsp;|&nbsp;
                        <a href="/privacy">Privacy</a>
                    </p>
                </Col>
            </Row>
            <CookieConsent location='bottom' buttonText='Okay' style={{ background: "green" }} buttonStyle={{ background: "white", color: "black" }} expires={150}>
                This website uses cookies to enhance the user experience, but don't worry, we're not selling your information to third parties. See our privacy policy for more details.{" "}
            </CookieConsent>
        </Container>
    )
}

export default Footer;