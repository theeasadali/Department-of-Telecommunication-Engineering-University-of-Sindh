import { useState } from 'react';
import {Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import NavOverlay from './NavOverlay';
const Header = () => {
    const [show, setShow] = useState(false);
    const showNav = () => setShow(true);
    const closeNav = () => setShow(false);
    return (
        <header>
            <NavOverlay placement="top" show={show} closeNav={closeNav}/>
            <Navbar bg="white" fixed="top" expand="true" style={{height: "80px", boxShadow: "0 1px 10px #aaa"}}> 
                <Container>
                    <Navbar.Brand href="#home" style={{color: "#001380"}}>
                        <Link to="/">
                            <img
                            alt=""
                            src={logo}
                            width="60"
                            height="30"
                            className="d-inline-block align-top"
                            />&nbsp; &nbsp;{'Telecommunication Engineering'}
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={showNav} />
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
