import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row, Pagination} from "react-bootstrap";
import Sidebar from "../SideBar/Sidebar";
class JobProfileVied extends Component {

    render() {
        return(
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            <div className="JobHeader my-5">
                                <h1>Available Tuition Jobs</h1>
                                <div className="mx-auto TeacherBordar"/>
                            </div>
                        </Col>
                    </Row>

                    <Row >
                        {/*MAIN COLAM*/}

                            <Col lg={8} md={8} sm={12} className="">

                                <div className="jobTable">

                                <Row className="mt- -1 p-0 bg-secondary">
                                    <Col><h3>Need A tutor for Class VII</h3></Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Row className="fColm  f2Colm">
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
                                                    <p><strong>Description:</strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, placeat?</p>
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

                                {/*JOB POST 2*/}
                                <div className="jobTable">
                                    <Row className="mt- -1 p-0 bg-secondary">
                                        <Col><h3>Need A tutor for Class VII</h3></Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <Row className="fColm  f2Colm">
                                                <Col sm={12} md={4} lg={4} ><p><strong className="text-primary">Class:</strong>7</p></Col>
                                                <Col sm={12} md={4} lg={4}><p><strong className="text-primary">Category:</strong>English Medium</p></Col>
                                                <Col sm={12} md={4} lg={4}><p><strong className="text-primary">Student gender:</strong>Male</p></Col>
                                            </Row>
                                            <Row >
                                                <Col>
                                                    <div className="f2Colm">
                                                        <p c><strong>Subject</strong>:Math,English</p>
                                                        <p><strong>Location</strong>:Dhaka</p>
                                                        <p><strong>Area</strong>:Mohammadpur</p>
                                                        <p><strong>Description:</strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, placeat?</p>
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



                                <div className="jobTable">
                                    <Row className="mt- -1 p-0 bg-secondary">
                                        <Col><h3>Need A tutor for Class VII</h3></Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <Row className="fColm  f2Colm">
                                                <Col sm={12} md={4} lg={4} ><p><strong className="text-primary">Class:</strong>7</p></Col>
                                                <Col sm={12} md={4} lg={4}><p><strong className="text-primary">Category:</strong>English Medium</p></Col>
                                                <Col sm={12} md={4} lg={4}><p><strong className="text-primary">Student gender:</strong>Male</p></Col>
                                            </Row>
                                            <Row >
                                                <Col>
                                                    <div className="f2Colm">
                                                        <p c><strong>Subject</strong>:Math,English</p>
                                                        <p><strong>Location</strong>:Dhaka</p>
                                                        <p><strong>Area</strong>:Mohammadpur</p>
                                                        <p><strong>Description:</strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, placeat?</p>
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



                                <div className="jobTable">
                                    <Row className="mt- -1 p-0 bg-secondary">
                                        <Col><h3>Need A tutor for Class VII</h3></Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <Row className="fColm  f2Colm">
                                                <Col sm={12} md={4} lg={4} ><p><strong className="text-primary">Class:</strong>7</p></Col>
                                                <Col sm={12} md={4} lg={4}><p><strong className="text-primary">Category:</strong>English Medium</p></Col>
                                                <Col sm={12} md={4} lg={4}><p><strong className="text-primary">Student gender:</strong>Male</p></Col>
                                            </Row>
                                            <Row >
                                                <Col>
                                                    <div className="f2Colm">
                                                        <p c><strong>Subject</strong>:Math,English</p>
                                                        <p><strong>Location</strong>:Dhaka</p>
                                                        <p><strong>Area</strong>:Mohammadpur</p>
                                                        <p><strong>Description:</strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, placeat?</p>
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


                                <div className="jobTable">
                                    <Row className="mt- -1 p-0 bg-secondary">
                                        <Col><h3>Need A tutor for Class VII</h3></Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <Row className="fColm  f2Colm">
                                                <Col sm={12} md={4} lg={4} ><p><strong className="text-primary">Class:</strong>7</p></Col>
                                                <Col sm={12} md={4} lg={4}><p><strong className="text-primary">Category:</strong>English Medium</p></Col>
                                                <Col sm={12} md={4} lg={4}><p><strong className="text-primary">Student gender:</strong>Male</p></Col>
                                            </Row>
                                            <Row >
                                                <Col>
                                                    <div className="f2Colm">
                                                        <p c><strong>Subject</strong>:Math,English</p>
                                                        <p><strong>Location</strong>:Dhaka</p>
                                                        <p><strong>Area</strong>:Mohammadpur</p>
                                                        <p><strong>Description:</strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, placeat?</p>
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

                        </Col>

                        {/*JOB POST 2*/}


                        {/*SIDE BAR*/}
                        <Col className="SideBarClass">
                            <Sidebar/>
                        </Col>
                    </Row>
                    <div className="mx-auto my-5">
                        <Pagination>
                            <Pagination.First />
                            <Pagination.Item active>{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Item>{3}</Pagination.Item>
                            <Pagination.Ellipsis />
                            <Pagination.Item >{12}</Pagination.Item>
                            <Pagination.Item>{20}</Pagination.Item>
                            <Pagination.Next />
                        </Pagination>
                    </div>
                </Container>
            </Fragment>

        );
        }
}


export default JobProfileVied;