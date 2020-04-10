import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Image, Pagination, Row} from "react-bootstrap";
import avatar from '../../asset/image/avatar1.png'
import Sidebar from "../SideBar/Sidebar";
import t1 from '../../asset/image/t1.png'
import t2 from '../../asset/image/t2.jpg'
import t3 from '../../asset/image/t3.jpg'
import t4 from '../../asset/image/t4.jpg'



class AllTeacherList extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            <div className="JobHeader my-5">
                                <h1>LIST OF ALL TEACHER</h1>
                                <div className="mx-auto TeacherBordar"/>
                            </div>
                        </Col>
                    </Row>

                    {/*LIST*/}

                    <Row>
                        <Col lg={8} md={8} sm={12}>

                        <div className="AllTeacherDiv">

                            <Row>
                                <Col lg={4} md={4} sm={4}>
                                    <Image src={avatar} className="mx-auto AllTecherImage "/>
                                    <p>ID:#14524</p>
                                </Col>

                                <Col lg={8} md={8} sm={8}>
                                    <div className="AllTecherText">
                                        <Row>
                                            <Col>
                                                <p><strong className="my-5">Md.Abdul jobbar</strong></p>
                                                <p><strong>Institute:</strong>KUET</p>
                                                <p><strong>Mobile:</strong>01521207545 </p>
                                            </Col>
                                            <Col>
                                                <p><strong>Area:</strong>Dhanmondi,MD.pur,Shymoli</p>
                                                <p><strong>BSC/MSC:</strong>Mechanical Engineering</p>
                                            </Col>
                                        </Row>
                                        <div className="teacherButton">
                                            <Button variant="primary">More Details >></Button>{' '}
                                        </div>

                                    </div>

                                </Col>
                            </Row>

                        </div>

                            {/*TEACHER 2*/}
                            <div className="AllTeacherDiv my-3">
                                <Row>
                                    <Col lg={4} md={4} sm={4}>
                                        <Image src={t1} className="mx-auto AllTecherImage "/>
                                        <p>ID:#14524</p>
                                    </Col>

                                    <Col lg={8} md={8} sm={8}>
                                        <div className="AllTecherText">
                                            <Row>
                                                <Col>
                                                    <p><strong className="my-5">Md.Abdul jobbar</strong></p>
                                                    <p><strong>Institute:</strong>KUET</p>
                                                    <p><strong>Mobile:</strong>01521207545 </p>
                                                </Col>
                                                <Col>
                                                    <p><strong>Area:</strong>Dhanmondi,MD.pur,Shymoli</p>
                                                    <p><strong>BSC/MSC:</strong>Mechanical Engineering</p>
                                                </Col>
                                            </Row>
                                            <div className="teacherButton">
                                                <Button variant="primary">More Details >></Button>{' '}
                                            </div>

                                        </div>

                                    </Col>
                                </Row>
                            </div>

                            {/*TEACHER 3*/}
                            <div className="AllTeacherDiv my-3">
                                <Row>
                                    <Col lg={4} md={4} sm={4}>
                                        <Image src={t2} className="mx-auto AllTecherImage "/>
                                        <p>ID:#14524</p>
                                    </Col>

                                    <Col lg={8} md={8} sm={8}>
                                        <div className="AllTecherText">
                                            <Row>
                                                <Col>
                                                    <p><strong className="my-5">Md.Abdul jobbar</strong></p>
                                                    <p><strong>Institute:</strong>KUET</p>
                                                    <p><strong>Mobile:</strong>01521207545 </p>
                                                </Col>
                                                <Col>
                                                    <p><strong>Area:</strong>Dhanmondi,MD.pur,Shymoli</p>
                                                    <p><strong>BSC/MSC:</strong>Mechanical Engineering</p>
                                                </Col>
                                            </Row>
                                            <div className="teacherButton">
                                                <Button variant="primary">More Details >></Button>{' '}
                                            </div>

                                        </div>

                                    </Col>
                                </Row>
                            </div>


                            {/*TEACHER 4*/}
                            <div className="AllTeacherDiv my-3">
                                <Row>
                                    <Col lg={4} md={4} sm={4}>
                                        <Image src={t3} className="mx-auto AllTecherImage "/>
                                        <p>ID:#14524</p>
                                    </Col>

                                    <Col lg={8} md={8} sm={8}>
                                        <div className="AllTecherText">
                                            <Row>
                                                <Col>
                                                    <p><strong className="my-5">Md.Abdul jobbar</strong></p>
                                                    <p><strong>Institute:</strong>KUET</p>
                                                    <p><strong>Mobile:</strong>01521207545 </p>
                                                </Col>
                                                <Col>
                                                    <p><strong>Area:</strong>Dhanmondi,MD.pur,Shymoli</p>
                                                    <p><strong>BSC/MSC:</strong>Mechanical Engineering</p>
                                                </Col>
                                            </Row>
                                            <div className="teacherButton">
                                                <Button variant="primary">More Details >></Button>{' '}
                                            </div>

                                        </div>

                                    </Col>
                                </Row>
                            </div>

                            {/*TEACHER 5*/}
                            <div className="AllTeacherDiv my-3">
                                <Row>
                                    <Col lg={4} md={4} sm={4}>
                                        <Image src={t4} className="mx-auto AllTecherImage "/>
                                        <p>ID:#14524</p>
                                    </Col>

                                    <Col lg={8} md={8} sm={8}>
                                        <div className="AllTecherText">
                                            <Row>
                                                <Col>
                                                    <p><strong className="my-5">Md.Abdul jobbar</strong></p>
                                                    <p><strong>Institute:</strong>KUET</p>
                                                    <p><strong>Mobile:</strong>01521207545 </p>
                                                </Col>
                                                <Col>
                                                    <p><strong>Area:</strong>Dhanmondi,MD.pur,Shymoli</p>
                                                    <p><strong>BSC/MSC:</strong>Mechanical Engineering</p>
                                                </Col>
                                            </Row>
                                            <div className="teacherButton">
                                                <Button variant="primary">More Details >></Button>{' '}
                                            </div>
                                        </div>

                                    </Col>

                                </Row>
                            </div>

                            {/*TEACHER 6*/}
                            <div className="AllTeacherDiv my-3">
                                <Row>
                                    <Col lg={4} md={4} sm={4}>
                                        <Image src={t2} className="mx-auto AllTecherImage "/>
                                        <p>ID:#14524</p>
                                    </Col>

                                    <Col lg={8} md={8} sm={8}>
                                        <div className="AllTecherText">
                                            <Row>
                                                <Col>
                                                    <p><strong className="my-5">Md.Abdul jobbar</strong></p>
                                                    <p><strong>Institute:</strong>KUET</p>
                                                    <p><strong>Mobile:</strong>01521207545 </p>
                                                </Col>
                                                <Col>
                                                    <p><strong>Area:</strong>Dhanmondi,MD.pur,Shymoli</p>
                                                    <p><strong>BSC/MSC:</strong>Mechanical Engineering</p>
                                                </Col>
                                            </Row>
                                            <div className="teacherButton">
                                                <Button variant="primary">More Details >></Button>{' '}
                                            </div>

                                        </div>

                                    </Col>
                                </Row>
                            </div>


                    </Col>

                        {/*SIDEBAR*/}
                   <Col lg={4} md={4} sm={0}>
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

export default AllTeacherList;