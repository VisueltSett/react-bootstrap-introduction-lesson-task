import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Nav() {
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Admin</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Nav;
