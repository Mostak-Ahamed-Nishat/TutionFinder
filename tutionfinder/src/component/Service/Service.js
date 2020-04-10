import React, {Component, Fragment} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import hire  from "../../asset/image/hire.png"
import provide  from "../../asset/image/service.png"
import phone  from "../../asset/image/phone.png"

class Service extends Component {
    render() {
        return (

                <Fragment>
                    <Container>
                        <Row>
                            <h1 className="ServiceHead mx-auto">Our Services</h1>
                        </Row>
                        <div className="hr"></div>
                        <br/>
                        <Container className="CarContainer">
                            <Row>
                                <Col lg={4} md={6} sm={12} >
                                    <div className="ServiceCard" >
                                        <Image src={hire} className="mx-auto "/>
                                        <h2>Heir Tutors</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio exercitationem impedit iste laudantium placeat,
                                            reiciendis. Amet beatae blanditiis consectetur consequuntur.
                                        </p>
                                        <br/>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} sm={12} >
                                    <div className="ServiceCard" >
                                        <Image src={provide} className="mx-auto"/>
                                        <h2>Provide Tutors</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio exercitationem impedit iste laudantium placeat,
                                            reiciendis. Amet beatae blanditiis consectetur consequuntur.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} sm={12} >
                                    <div className="ServiceCard" >
                                        <Image src={phone} className="mx-auto"/>
                                        <h2>Give Support </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio exercitationem impedit iste laudantium placeat,
                                            reiciendis. Amet beatae blanditiis consectetur consequuntur.
                                        </p>

                                    </div>
                                </Col>
                            </Row>
                        </Container>

                    </Container>
                </Fragment>

        );
    }
}

export default Service;