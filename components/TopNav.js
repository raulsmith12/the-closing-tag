import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const TopNav = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand>
                <img src="https://theclosingtag.com/img/the-closing-tag-logo.png" width="auto" height="75" alt="The Closing Tag Logo" />
            </Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/archives">Archives</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default TopNav;