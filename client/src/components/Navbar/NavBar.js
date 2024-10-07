import React from 'react';
import logo from '../../static/imgs/sp-logo.svg';

import { Nav, Navbar, Button, Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="SP Express" style={{ width: '150px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Button
                            href="https://www.sppartner.ru/"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outline-primary"
                        >
                            Личный кабинет
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar