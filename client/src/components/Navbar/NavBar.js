import React from 'react'
import logo from '../../static/imgs/logo-main.png'
import { Link, NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
    return (
        <Container>
            <Navbar>
                <img src={logo} alt={'SP Express'} />
                <Nav className="ms-auto">
                    <Button href="https://www.sppartner.ru/" target='_blank'>Личный кабинет</Button>
                </Nav >
            </Navbar>
        </Container>
    )
}

export default NavBar