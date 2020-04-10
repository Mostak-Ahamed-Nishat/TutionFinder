import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";


class PageTop extends Component {
    render() {
        return (
            <div>
                <Fragment>
                    <Container fluid={true} className="PageTopBanner">
                        <Row className="PageTopbackOverLay">
                            <div >
                                <Row>
                                    <Col >
                                        <div  className="TopPageBannerText ">
                                            <h2>{this.props.title}</h2>
                                        </div>
                            </Col>
                                </Row>
                            </div>
                        </Row>
                    </Container>
                </Fragment>
            </div>
        );
    }
}

export default PageTop;