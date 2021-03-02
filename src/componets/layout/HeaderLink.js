import React, {Component} from 'react';
import {Container, Nav, Navbar, Image} from 'react-bootstrap';
import {BrowserRouter as Router} from 'react-router-dom';

class HeaderLink extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <Navbar  className="navbar navbar-expand navbar-white navbar-light pb-0 border-bottom" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">                                    
                        <Image src="/dist/img/AdminLTELogo.png" className="pr-1 pl3 mb-1" width='30' />
                        e-Komunitas
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="mr-auto" variant="tabs" className="mb-0 border-bottom-0">
                        <Router>
                            <Nav.Link href="/dusunbambu/fromwarga" id="fromwarga" className="border-bottom-0">Form Warga</Nav.Link>
                            <Nav.Link href="/dusunbambu/formkeluarga" id="formkeluarga" className="border-bottom-0">Form Keluarga</Nav.Link>
                        </Router>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default HeaderLink;