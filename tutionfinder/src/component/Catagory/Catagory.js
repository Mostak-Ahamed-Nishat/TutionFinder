import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import Car from "../Carousel/Car";


class Catagory extends Component {
    render() {
        return (
          <Fragment>
              <Container>
             <Row >
                 <Col lg={4} md={6} sm={12}>
                     <div className="Categories">
                         <h4 className="my-10">DIVISIONAL TUTOR Available</h4>
                         <Row className="my-4">
                             <Col>
                                 <Button clasName="" variant="outline-light"  block>Dhaka 3540</Button>
                             </Col>
                             <Col>
                                 <Button clasName="" variant="outline-light"  block>Comilla 3540</Button>
                             </Col>
                         </Row>

                         <Row className="my-4">
                             <Col>
                                 <Button clasName="" variant="outline-light"  block>Barisal 710</Button>
                             </Col>
                             <Col>
                                 <Button clasName="" variant="outline-light"  block>Sylhet 1370</Button>
                             </Col>
                         </Row>
                         <Row className="my-4">
                             <Col>
                                 <Button clasName="" variant="outline-light"  block>Rajshahi 940</Button>
                             </Col>
                             <Col>
                                 <Button clasName="" variant="outline-light"  block>Mymensingh 270</Button>
                             </Col>
                         </Row>
                         <Row>
                             <Col>
                                 <Button clasName="" variant="outline-light"  block>chittagong 1750</Button>
                             </Col>
                             <Col>
                                 <Button clasName="" variant="outline-light"  block>Khulna 370</Button>
                             </Col>
                         </Row>

                     </div>
                 </Col>

                 <Col lg={8} md={6} sm={12}>
                     <div className="Car">
                         <Car/>
                     </div>

                 </Col>
             </Row>
              </Container>
          </Fragment>
        );
    }
}

export default Catagory;