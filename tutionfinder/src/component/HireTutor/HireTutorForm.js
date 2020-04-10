import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

class HireTutorForm extends Component {
    render() {
        return (
        <Fragment>
            <Container>

                <Row>

                <Col>
                    <div className="HireFormHeadline my-4">
                        <h1 className="my-5">If you need tutor fill up the form.Tutor will contact with you</h1>
                    </div>
                </Col>
            </Row>


                <Form className="HireForm">
                    <Row>
                        <Col>
                            <Form.Label>Title :</Form.Label>
                            <Form.Control  placeholder="Ex:Need A tutor For class x" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>First Name :</Form.Label>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Label>Last Name :</Form.Label>
                            <Form.Control placeholder="Last name" />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label>Select Gender :</Form.Label>
                            <Form.Control as="select" >
                                <option>Choose...</option>
                                <option>Male</option>
                                <option>Female</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>Institute :</Form.Label>
                            <Form.Control placeholder="Last name" />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label>Select Your Medium:</Form.Label>
                            <Form.Control as="select" >
                                <option value="Bangla Medium">Bangla Medium</option>
                                <option value="English Version">English Version</option>
                                <option value="English Medium">English Medium</option>
                                <option value="Religious Studies">Religious Studies</option>
                                <option value="Admission Test">Admission Test</option>
                                <option value="Professional skill Development">Professional skill Development</option>
                                <option value="Arts">Arts</option>
                                <option value="Language Learning">Language Learning</option>
                                <option value="Madrasa Medium">Madrasa Medium</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>Select Class :</Form.Label>
                            <Form.Control as="select" >
                                <option value="class-1">Class 1</option>
                                <option value="Class-2">Class 2</option>
                                <option value="Class-3">Class 3</option>
                                <option value="Class-4">Class 4</option>
                                <option value="Class-5">Class 5</option>
                                <option value="Class-6">Class 6</option>
                                <option value="Class-7">Class 7</option>
                                <option value="Class-8">Class 8</option>
                                <option value="Class-9">Class 9</option>
                                <option value="Class-x">Class x</option>
                                <option value="kg">KG</option>
                                <option value="Arts">Arts</option>
                                <option value="HSC-1st-Year">HSC 1st Year</option>
                                <option value="HSC-2nd-Year">HSC 2nd Year</option>
                            </Form.Control>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label>Phone Number :</Form.Label>
                            <Form.Control type="text" placeholder="Last name" />

                        </Col>
                        <Col>
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" placeholder="Last name" />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label>Your Location :</Form.Label>
                            <Form.Control as="select">
                                <option value="1">Dhaka</option>
                                <option value="2">Chattogram</option>
                                <option value="3">Rajshahi</option>
                                <option value="4">Sylhet</option>
                                <option value="5">Khulna</option>
                                <option value="6">Barishal</option>
                                <option value="7">Rangpur</option>
                                <option value="8">Mymensingh</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>Area:</Form.Label>
                            <Form.Control type="text" placeholder="Last name" />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label>Select Required Teacher Gender :</Form.Label>
                            <Form.Control as="select" value="Choose...">
                                <option>Male</option>
                                <option>Female</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>Salary :</Form.Label>
                            <Form.Control as="select">
                                <option value="1000 Tk/Month" >1000 Tk/Month</option>
                                <option value="1500 Tk/Month" >1500 Tk/Month</option>
                                <option value="2000 Tk/Month" >2000 Tk/Month</option>
                                <option value="2500 Tk/Month" >2500 Tk/Month</option>
                                <option value="3000 Tk/Month" >3000 Tk/Month</option>
                                <option value="3500 Tk/Month" >3500 Tk/Month</option>
                                <option value="4000 Tk/Month" >4000 Tk/Month</option>
                                <option value="4500 Tk/Month" >4500 Tk/Month</option>
                                <option value="5000 Tk/Month" >5000 Tk/Month</option>
                                <option value="5500 Tk/Month" >5500 Tk/Month</option>
                                <option value="6000 Tk/Month" >6000 Tk/Month</option>
                                <option value="6500 Tk/Month" >6500 Tk/Month</option>
                                <option value="7000 Tk/Month" >7000 Tk/Month</option>
                                <option value="7500 Tk/Month" >7500 Tk/Month</option>
                                <option value="8000 Tk/Month" >8000 Tk/Month</option>
                                <option value="8500 Tk/Month" >8500 Tk/Month</option>
                                <option value="9000 Tk/Month" >9000 Tk/Month</option>
                                <option value="9500 Tk/Month" >9500 Tk/Month</option>
                                <option value="10,000 Tk/Month" >10,000 Tk/Month</option>
                                <option value="10,500 Tk/Month" >10,500 Tk/Month</option>
                                <option value="11,000 Tk/Month" >11,000 Tk/Month</option>
                                <option value="11,500 Tk/Month" >11,500 Tk/Month</option>
                                <option value="12,000 Tk/Month" >12,000 Tk/Month</option>
                                <option value="12,500 Tk/Month" >12,500 Tk/Month</option>
                                <option value="13,000 Tk/Month" >13,000 Tk/Month</option>
                                <option value="13,500 Tk/Month" >13,500 Tk/Month</option>
                                <option value="14,000 Tk/Month" >14,000 Tk/Month</option>
                                <option value="14,500 Tk/Month" >14,500 Tk/Month</option>
                                <option value="15,000 Tk/Month" >15,000 Tk/Month</option>
                            </Form.Control>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button clasName="" variant="primary" size="lg" block>
                        Submit
                    </Button>
                </Form>
            </Container>
        </Fragment>
        );
    }
}

export default HireTutorForm;