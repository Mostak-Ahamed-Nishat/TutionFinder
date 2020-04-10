import React, {Component} from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import Avatar3 from "../../asset/image/avatar3.png";
import Avatar4 from "../../asset/image/avatar4.png";
import Avatar5 from "../../asset/image/avatar5.png";
import women from "../../asset/image/women.png";
import avatar6 from "../../asset/image/avatar6.png";
import avatar8 from "../../asset/image/avatar8.png";

class FeatureTeacher extends Component {
    render() {
        return (

            <div className="Fcont">
           <Container>
               <Row>
                   <Col>
                       <h2 className="my-4 mx-auto">Feature tutors</h2>
                   </Col>
               </Row>

               <Row>
                   <Col lg={4} md={6} sm={12} className="my-3">
                       <div className="FeatureDiv">
                           <Row>
                               <Col lg={4} md={4} sm={4}>
                                   <Image src={avatar6} className="mx-auto FImage "/>
                               </Col>
                               <Col lg={8} md={8} sm={8}>
                                   <div className="FText">
                                       <p><strong className="my-5">Md.Abdul jobbar</strong></p>
                                       <p><strong>KUET</strong></p>
                                        <p><strong>Mechanical Engineering</strong></p>
                                        <p><strong>01521207545 </strong></p>
                                   </div>
                               </Col>
                           </Row>
                       </div>
                   </Col>

                   {/*COL 2*/}

                   <Col lg={4} md={6} sm={12} className="my-3">
                       <div className="FeatureDiv">
                           <Row>
                               <Col lg={4} md={4} sm={4}>
                                   <Image src={Avatar3} className="mx-auto FImage "/>
                               </Col>
                               <Col lg={8} md={8} sm={8}>
                                   <div className="FText">
                                       <p><strong className="my-5">Md.Kamal Khan</strong></p>
                                       <p><strong>DIU</strong></p>
                                       <p><strong>Software Engineering</strong></p>
                                       <p><strong>01521207545 </strong></p>
                                   </div>
                               </Col>
                           </Row>
                       </div>
                   </Col>

                   {/*COL 3*/}

                   <Col lg={4} md={6} sm={12} className="my-3">
                       <div className="FeatureDiv">
                           <Row>
                               <Col lg={4} md={4} sm={4}>
                                   <Image src={Avatar4} className="mx-auto FImage "/>
                               </Col>
                               <Col lg={8} md={8} sm={8}>
                                   <div className="FText">
                                       <p><strong className="my-5">Md.Sofikul Islam</strong></p>
                                       <p><strong>BUET</strong></p>
                                       <p><strong>Computer Engineering</strong></p>
                                       <p><strong>01521207545 </strong></p>
                                   </div>
                               </Col>
                           </Row>
                       </div>
                   </Col>
               </Row>

               {/*ROW 2*/}
               <Row>
                   <Col lg={4} md={6} sm={12} className="my-3">
                       <div className="FeatureDiv">
                           <Row>
                               <Col lg={4} md={4} sm={4}>
                                   <Image src={Avatar5} className="mx-auto FImage "/>
                               </Col>
                               <Col lg={8} md={8} sm={8}>
                                   <div className="FText">
                                       <p><strong className="my-5">Md.Khalid jobbar</strong></p>
                                       <p><strong>DMC</strong></p>
                                       <p><strong>MBBS</strong></p>
                                       <p><strong>01521207545 </strong></p>
                                   </div>
                               </Col>
                           </Row>
                       </div>
                   </Col>

                   {/*COL 2*/}

                   <Col lg={4} md={6} sm={12} className="my-3">
                       <div className="FeatureDiv">
                           <Row>
                               <Col lg={4} md={4} sm={4}>
                                   <Image src={women} className="mx-auto FImage "/>
                               </Col>
                               <Col lg={8} md={8} sm={8}>
                                   <div className="FText">
                                       <p><strong className="my-5">Md.Abdul jobbar</strong></p>
                                       <p><strong>NSU</strong></p>
                                       <p><strong>Environmental Engineering</strong></p>
                                       <p><strong>01521207545 </strong></p>
                                   </div>
                               </Col>
                           </Row>
                       </div>
                   </Col>

                   {/*COL 3*/}

                   <Col lg={4} md={6} sm={12} className="my-3">
                       <div className="FeatureDiv">
                           <Row>
                               <Col lg={4} md={4} sm={4}>
                                   <Image src={avatar8} className="mx-auto FImage "/>
                               </Col>
                               <Col lg={8} md={8} sm={8}>
                                   <div className="FText">
                                       <p><strong className="my-5">Md.Sakib Hasan</strong></p>
                                       <p><strong>CUET</strong></p>
                                       <p><strong>Mechanical Engineering</strong></p>
                                       <p><strong>01521207545 </strong></p>
                                   </div>
                               </Col>
                           </Row>
                       </div>
                   </Col>
               </Row>
               {/*ROW 3*/}
               <Row>
                   <Col lg={4} md={6} sm={12} className="my-3">
                       <div className="FeatureDiv">
                           <Row>
                               <Col lg={4} md={4} sm={4}>
                                   <Image src={Avatar3} className="mx-auto FImage "/>
                               </Col>
                               <Col lg={8} md={8} sm={8}>
                                   <div className="FText">
                                       <p><strong className="my-5">Md.Abdul jobbar</strong></p>
                                       <p><strong>KUET</strong></p>
                                       <p><strong>Mechanical Engineering</strong></p>
                                       <p><strong>01521207545 </strong></p>
                                   </div>
                               </Col>
                           </Row>
                       </div>
                   </Col>

                   {/*COL 2*/}

                   <Col lg={4} md={6} sm={12} className="my-3">
                       <div className="FeatureDiv">
                           <Row>
                               <Col lg={4} md={4} sm={4}>
                                   <Image src={Avatar5} className="mx-auto FImage "/>
                               </Col>
                               <Col lg={8} md={8} sm={8}>
                                   <div className="FText">
                                       <p><strong className="my-5">Md.Abdul jobbar</strong></p>
                                       <p><strong>KUET</strong></p>
                                       <p><strong>Mechanical Engineering</strong></p>
                                       <p><strong>01521207545 </strong></p>
                                   </div>
                               </Col>
                           </Row>
                       </div>
                   </Col>

                   {/*COL 3*/}

                   <Col lg={4} md={6} sm={12} className="my-3">
                       <div className="FeatureDiv">
                           <Row>
                               <Col lg={4} md={4} sm={4}>
                                   <Image src={women} className="mx-auto FImage "/>
                               </Col>
                               <Col lg={8} md={8} sm={8}>
                                   <div className="FText">
                                       <p><strong className="my-5">Md.Abdul jobbar</strong></p>
                                       <p><strong>KUET</strong></p>
                                       <p><strong>Mechanical Engineering</strong></p>
                                       <p><strong>01521207545 </strong></p>
                                   </div>
                               </Col>
                           </Row>
                       </div>
                   </Col>
               </Row>
               <Button className="my-3" variant="primary" size="md" href="/Alltutor"  >
                  View All
               </Button>{' '}
           </Container>

            </div>
        );
    }
}

export default FeatureTeacher;