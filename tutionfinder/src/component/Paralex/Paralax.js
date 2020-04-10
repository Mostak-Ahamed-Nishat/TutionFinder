import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Paralax extends Component {
    render() {
        return (
            <Fragment >
                <Container className="Para">
                    <div className="ParaOverlay">
                        <Container>
                        <Row>
                            <Col className="ha">
                                <h4>Total Teacher</h4>
                                <h1>300+</h1>
                            </Col>

                            <Col className="ha">
                                <h4>Teacher Provide</h4>
                                <h1>1000+</h1></Col>
                            <Col className="ha">
                                <h1 >We Care Your Expectation</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut expedita odit praesentium, quam saepe unde.</p>
                            </Col>

                        </Row>
                        </Container>
                    </div>
                </Container>

            </Fragment>
        );
    }
}

export default Paralax;