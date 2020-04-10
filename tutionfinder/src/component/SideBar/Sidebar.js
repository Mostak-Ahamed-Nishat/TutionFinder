import React, {Component, Fragment} from 'react';
import {Button, Col, Form, Row, Table} from "react-bootstrap";

class Sidebar extends Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Col>
                        <div className="fstSideBar">
                        <Table>
                            <thead>
                            <tr>
                                <th className="bg-primary text-light ml-5">Filter By Category</th>
                                <th className="bg-primary text-light"> </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Math</td>
                                <td>1250</td>
                            </tr>
                            <tr>
                                <td>English</td>
                                <td>1350</td>
                            </tr>

                            <tr>
                                <td>Bangla</td>
                                <td>450</td>
                            </tr>
                            <tr>
                                <td>Biology</td>
                                <td>140</td>
                            </tr>
                            </tbody>
                        </Table>
                        </div>
                    </Col>
                </Row>

                  {/*SIDEBAR 2*/}

                <Row className="my-5">
                    <Col>
                        <div className="fstSideBar">
                        <Row>
                            <Col><h4>Search Teacher</h4></Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form className="HireForm">
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
                                    </Row>

                                    <Row>
                                        <Col>
                                        <Form.Label>Area:</Form.Label>
                                        <Form.Control type="text" placeholder="Last name" />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <Form.Label>Select Gender :</Form.Label>
                                            <Form.Control as="select" >
                                                <option>Choose Gender...</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </Form.Control>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <Form.Label>Class:</Form.Label>
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
                                    <Button className="my-2" variant="success">Search</Button>{' '}
                                </Form>

                            </Col>
                        </Row>
                        </div>
                    </Col>
                </Row>

            </Fragment>
        );
    }
}

export default Sidebar;