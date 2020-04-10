import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

class Searchteacher extends Component {
    render() {
        return (
       <Fragment>
           <Container>

               <Row>
                   <Col>
                       <div className="HireFormHeadline my-4">
                           <h1 className="my-5">SEARCH FOR TUTORS</h1>
                               <h4>Find the right tutor, in your area</h4>
                       </div>
                   </Col>
               </Row>


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
                       <Col>
                           <Form.Label>Area:</Form.Label>
                           <Form.Control type="text" placeholder="Last name" />
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
                           <Form.Group>
                               <Form.Label>Subject</Form.Label>
                               <Form.Control as="select" >
                                   <option value="all">All</option>
                                   <option value="bangla">Bangla </option>
                                   <option value="English">English</option>
                                   <option value="math">Math</option>
                                   <option value="physic">physic</option>
                                   <option value="Admission Test">Admission Test</option>
                                   <option value="Professional skill Development">Professional skill Development</option>
                                   <option value="Accounting">Accounting</option>
                                   <option value="finance">finance</option>
                               </Form.Control>
                           </Form.Group>
                       </Col>
                   </Row>


                   <Button clasName="" variant="primary" size="lg" block>
                       Submit
                   </Button>
               </Form>

               <br/><br/><br/><br/>
               <h2>Search Result</h2>
               <div className="mx-auto TeacherBordar"/>
               <br/><br/><br/><br/>
           </Container>
       </Fragment>
        );
    }
}

export default Searchteacher;