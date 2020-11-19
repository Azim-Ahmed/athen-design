import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import banner from '../../../../Assests/Illustration/16 [Converted]@2x.png'

const Banner = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col className="mb-4 pl-2 mb-5  d-flex align-items-center" md={6} lg={6} sm={12} xs={12}>
                    <div><h1 className="FontHeader">Florence <br />
Agency </h1>
<p className="py-3 w-75">Florence is the online marketplace seamlessly connecting independent nurses and carers with the shifts they want. Take control. Sign up Learn. </p>
<button className="btnItem">See Pricing</button></div>

                </Col>
                <Col md={6} lg={6} sm={12} xs={12}>
                    <img width="100%" src={banner} alt="topak" />
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;