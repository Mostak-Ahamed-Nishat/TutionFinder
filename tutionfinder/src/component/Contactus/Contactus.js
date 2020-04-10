import React, {Component, Fragment} from 'react';
// import '../asset/css/bootstrap.min.css';
import {Button, Col, Container, Form,Image,Row} from "react-bootstrap";
import Contactvector from '../../asset/image/contact.jpg'

class Contactus extends Component {
    render() {
        return (

                <Fragment>
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} md={12} className="text-center">
                                <h2 className="my-4">Contact</h2>
                            </Col>
                        </Row>
                        <br/><br/>

                        <Row>
                            <Col xs={6} sm={12} md={6}>
                                <Image src={Contactvector} className="contactVector"/>
                            </Col>
                            <Col xs={6} sm={12} md={6}>
                                <Form id="contact-form" className="form" action="#" method="POST" role="form">
                                    <Form.Group controlId="formBasicEmail">

                                        <Form.Label >Name:</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" />

                                        <Form.Label>Email address:</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />

                                        <Form.Label>Phone:</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Phone Number" />

                                        <Form.Label>Message:</Form.Label>
                                        <Form.Control as="textarea" rows="3" />

                                    </Form.Group>
                                </Form>
                                <Button variant="primary" className='ml-20' size="lg" active>
                                    Send Message
                                </Button>{' '}
                            </Col>
                        </Row>
<br/>
                    </Container>
                </Fragment>
        );
    }
}

export default Contactus;