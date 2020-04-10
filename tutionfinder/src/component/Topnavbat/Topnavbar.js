import React, {Component, Fragment} from 'react';
import '../../asset/css/style.css';
import '../../asset/css/bootstrap.min.css'
import {Navbar, Nav, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import hate from '../../asset/image/hat.png'


class Topnavbar extends Component{
    render() {
        return(
            <Fragment>
                <Navbar className="navBar" fixed="top" collapseOnSelect expand="lg" variant="dark" >

                    <Navbar.Brand to="/">
                        <Image src={hate} className="HatLogo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Link to="/" className="active navItem '" >Home</Link>
                            <Link to="/AllTutor" className="navItem" > All Tutor</Link>
                            <Link to="/HireTutor" className="navItem">Hire Tutor</Link>
                            <Link to="/PostJob" className="navItem">Post job</Link>
                            <Link to="/Search" className="navItem">Search Teacher</Link>
                            <Link to="/RequestJob" className="navItem">Request Tuition</Link>
                            <Link to="/Contact" className="navItem">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}
export default Topnavbar;