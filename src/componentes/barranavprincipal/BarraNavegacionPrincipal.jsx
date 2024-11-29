import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import LogoSistemaSalud from "../../img/logoclinica.jpeg";



function BarraNavegacionPrincipal() {
    return (
        <Navbar expand="md" id="navbar">
            <Navbar.Brand href="/inicio">
                <img className="h-100" src={LogoSistemaSalud} alt="Logo Inkanet" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" id="botonBarra"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="barra-nav">
                    <Nav.Link as={Link} to="/inicio"> Home </Nav.Link>
                    <Nav.Link as={Link} to="/about"> Acerca De </Nav.Link>
                    <Nav.Link as={Link} to="/team"> Team </Nav.Link>
                    <Nav.Link as={Link} to="/login" id="login"> Acceso </Nav.Link>
                    <Nav.Link as={Link} to="/signup" id="sign"> Sign Up </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default BarraNavegacionPrincipal
