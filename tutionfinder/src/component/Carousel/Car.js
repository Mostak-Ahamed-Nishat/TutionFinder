import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import {Button, Col, Row} from "react-bootstrap";


class Car extends Component {
    render() {
        return (
            <div>
                <Carousel className="carous">
                    <Carousel.Item className="carItem">
                        <Row>
                            <Col>
                                <div className="CarDiv">
                                    <h3>Recent Job Post</h3>
                                    <div className="carText">
                                        <Row >
                                            <Col><h5>Need A tutor for Class VII</h5></Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Row className="CarColm  f2Colm">
                                                    <Col sm={12} md={4} lg={4} ><p><strong className="text-primary">Class:</strong>7</p></Col>
                                                    <Col sm={12} md={4} lg={4}><p><strong className="text-primary">Category:</strong>English Medium</p></Col>
                                                    <Col sm={12} md={4} lg={4}><p><strong className="text-primary">Student gender:</strong>Male</p></Col>
                                                </Row>
                                                <Row >
                                                    <Col>
                                                        <div className="f2Colm">
                                                            <p><strong>Subject</strong>:Math,English</p>
                                                            <p><strong>Location</strong>:Dhaka</p>
                                                            <p><strong>Area</strong>:Mohammadpur</p>
                                                            <p><strong>Post:</strong>01/05/2019</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <div className="teacherButton">
                                                    <Button variant="primary">More Details >></Button>{' '}
                                                </div>
                                            </Col>
                                        </Row>

                                    </div>
                                </div>
                            </Col>
                        </Row>

                    </Carousel.Item>


                    <Carousel.Item className="carItem">
                        <Row>
                            <Col>
                                <div className="CarDiv">
                                    <h3>Recent Job Post</h3>
                                    <div className="carText">
                                        <Row >
                                            <Col><h5>Need A tutor for Class VII</h5></Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Row className="CarColm  f2Colm">
                                                    <Col sm={12} md={4} lg={4} ><p><strong className="text-primary">Class:</strong>7</p></Col>
                                                    <Col sm={12} md={4} lg={4}><p><strong className="text-primary">Category:</strong>English Medium</p></Col>
                                                    <Col sm={12} md={4} lg={4}><p><strong className="text-primary">Student gender:</strong>Male</p></Col>
                                                </Row>
                                                <Row >
                                                    <Col>
                                                        <div className="f2Colm">
                                                            <p><strong>Subject</strong>:Math,English</p>
                                                            <p><strong>Location</strong>:Dhaka</p>
                                                            <p><strong>Area</strong>:Mohammadpur</p>
                                                            <p><strong>Post:</strong>01/05/2019</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <div className="teacherButton">
                                                    <Button variant="primary">More Details >></Button>{' '}
                                                </div>
                                            </Col>
                                        </Row>

                                    </div>
                                </div>
                            </Col>
                        </Row>



                    </Carousel.Item>




                    <Carousel.Item className="carItem">
                        <Row>
                            <Col>
                                <div className="CarDiv">
                                    <h3>Recent Job Post</h3>
                                    <div className="carText">
                                        <Row >
                                            <Col><h5>Need A tutor for Class VII</h5></Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Row className="CarColm  f2Colm">
                                                    <Col sm={12} md={4} lg={4} ><p><strong className="text-primary">Class:</strong>7</p></Col>
                                                    <Col sm={12} md={4} lg={4}><p><strong className="text-primary">Category:</strong>English Medium</p></Col>
                                                    <Col sm={12} md={4} lg={4}><p><strong className="text-primary">Student gender:</strong>Male</p></Col>
                                                </Row>
                                                <Row >
                                                    <Col>
                                                        <div className="f2Colm">
                                                            <p><strong>Subject</strong>:Math,English</p>
                                                            <p><strong>Location</strong>:Dhaka</p>
                                                            <p><strong>Area</strong>:Mohammadpur</p>
                                                            <p><strong>Post:</strong>01/05/2019</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <div className="teacherButton">
                                                    <Button variant="primary">More Details >></Button>{' '}
                                                </div>
                                            </Col>
                                        </Row>

                                    </div>
                                </div>
                            </Col>
                        </Row>



                    </Carousel.Item>

                </Carousel>

            </div>
        );
    }
}

export default Car;