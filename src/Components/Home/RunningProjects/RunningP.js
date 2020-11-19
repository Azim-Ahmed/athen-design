import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import projectPhoto from '../../../Assests/Illustration/20 [Converted]@2x.png'
import './RunningP.scss'

const RunningP = () => {
    return (
        <Container className="mt-5 mb-5">
            <Row className="p-5">
                <Col className="py-5" md={6} lg={6} sm={12} xs={12}>
                <img className=" w-100" src={projectPhoto} alt=""/>
                
                </Col>
                <Col className=" d-flex align-items-center" md={6} lg={6} sm={12} xs={12}>
                <div className="pl-5">
                    <h1 className="runningProjectHeader">Stay Running & Project</h1>
                    <p className="py-2 w-75"><small>It is a long established fact that a reader will be distracted by the
readable content of a page when looking at its layout. The point of
using Lorem Ipsum is that it has a more-or-less normal distribution
of letter.
</small></p>
<button className="btnItem">Contact us</button>
                </div>
                
                </Col>
            </Row>
        </Container>
    );
};

export default RunningP;