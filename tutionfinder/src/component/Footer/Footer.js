import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
           <Container>
               <Row>
                   <Col xs={6} md={4} >
                       <div className="footerContainer">
                       <h4>About</h4>
                       <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deleniti ipsum laboriosam nisi odio quia reiciendis sed tenetur. Eveniet, unde?</p>
                       </div>
                   </Col>
                   <Col xs={6} md={4}>
                       <div className="footerContainer">
                       <h4>Categories</h4>
                       <ul className="footer-links">
                           <li><a href="">BANGLA</a></li>
                           <li><a href="">ENGLISH</a></li>
                       </ul>
                           </div>
                   </Col>
                   <Col xs={6} md={4}>
                       <div className="footerContainer">
                       <h4>Quick Links</h4>
                       <ul className="footer-links">
                           <li><a href="http://scanfcode.com/about/">About Us</a></li>
                           <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                           <li><a href="http://scanfcode.com/contribute-at-scanfcode/">FIND TEACHER</a></li>
                           <li><a href="http://scanfcode.com/privacy-policy/">POST JOB</a></li>
                           <li><a href="http://scanfcode.com/sitemap/">HOME</a></li>
                       </ul>
                       </div>
                   </Col>
               </Row>
           </Container>
            </div>
        );
    }
}

export default Footer;