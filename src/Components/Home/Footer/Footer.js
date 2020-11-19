import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from '../../../Assests/Illustration/Group 86.png'
import facebook from '../../../Assests/Illustration/facebook-logo-in-circular-shape@2x.png'
import linkedin from '../../../Assests/Illustration/linkedin (2)@2x.png'
import twitter from '../../../Assests/Illustration/twitter (4)@2x.png'
import dribble from '../../../Assests/Illustration/dribbble (1)@2x.png'

const Footer = () => {
    return (
       <div className="serviceBackground pt-2 pb-4">
            <Container>
            <Row className=" mt-5">
                <Col className="text-center my-4" md={5} lg={5} sm={12} xs={12}>
                    <img width="30%" className="pb-4" src={logo} alt=""/>
                    <div className="text-center">
                        <img  className="img-fluid mr-4"  src={facebook} alt=""/>
                        <img className="img-fluid mr-4 " src={linkedin} alt=""/>
                        <img className="img-fluid mr-4 " src={twitter} alt=""/>
                        <img className="img-fluid mr-4 " src={dribble} alt=""/>
                    </div>
                </Col>
                <Col  className="text-center my-4"  md={2} lg={2} sm={12} xs={12}>
                    <ul className="list-unstyled">
                        <li>Features</li>
                        <li>Enterprise</li>
                        <li>Pricing</li>
                    </ul>
                </Col>
                <Col  className="text-center my-4" md={2} lg={2} sm={12} xs={12}>
                <ul className="list-unstyled">
                    <li>Blog</li>
                    <li>Help Center</li>
                    <li>Contact Us</li>
                    <li>Status</li>
                </ul>
                </Col>
                <Col className="text-center my-4"  md={2} lg={2} sm={12} xs={12}>
                <ul className="list-unstyled">
                    <li>About Us</li>
                    <li>Terms of Service</li>
                    <li>Security</li>
                    <li>Login</li>
                </ul>
                </Col>
            </Row>
        </Container>
       </div>
    );
};

export default Footer;