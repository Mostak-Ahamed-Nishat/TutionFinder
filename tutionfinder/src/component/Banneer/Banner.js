import React, {Component, Fragment} from 'react';
import '../../asset/css/style.css';
import '../../asset/css/bootstrap.min.css'
import { Col, Container,Row} from "react-bootstrap";
import Login from "./Login";
import Registration from "./Registration";



class Banner extends Component {

    render() {
            return (
                <Fragment>
                    <Container fluid={true} className="banner">
                        <Row className="backOverLay">
                            <div className="mainDiv mx-auto">
                                <Row>
                                    <Col className="bannerText ">
                                        <div className="content ">
                                            <h1>Welcome to Tution Finder</h1>
                                            <h4 className="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit. Eum itaque laboriosam quibusdam </h4>
                                            <Login/> <br/>
                                            <Registration/>

                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Row>
                    </Container>
                </Fragment>

            );
        }
    }

export default Banner;