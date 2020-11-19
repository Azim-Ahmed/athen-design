import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import photo1 from '../../../Assests/Illustration/Group 65@2x.png'
import photo2 from '../../../Assests/Illustration/Group 66@2x.png'
import photo3 from '../../../Assests/Illustration/Group 69@2x.png'
import photo4 from '../../../Assests/Illustration/Group 72@2x.png'
import './Services.scss'

const Services = () => {
    const servicesData = [
        {
            title: "Experience Design",
            description: "The point of using Experience Design is that it has a more-orless normal. Grab it with free of 30% discount.",
            photo: photo1,
            id: 1,
        },
        {
            title: "Interface Design",
            description: "We are always dedicated to out interface design. feel free to know any kind of specification.",
            photo: photo2,
            id: 2,
        },
        {
            title: "Prototyping",
            description: "We are always dedicated to out prototyping Agent. feel free to know any kind of specification.",
            photo: photo3,
            id: 3,
        },
        {
            title: "Illustration",
            description: "We are always dedicated to out illustration Agent. feel free to know any kind of specification.",
            photo: photo4,
            id: 4,
        }
    ]
    return (
        <div className="serviceBackground">
            <Container className="  mt-5">

                <div className="text-center py-3 my-5">
                    <h1 className="runningProjectHeader">
                        What we do
                </h1>
                    <p>Our main focus is to make the User Experience very
simple  <br /> and easy. Simplicity is our Strength</p>
                </div>

                <Row className="text-center">
                    {
                        servicesData.map(service =>
                            <Col className=" py-3" xl={3} md={4} lg={3} sm={12} xs={12}>
                                <div className="serviceCard p-2">
                                <img src={service.photo} className="w-5 p-3" alt="" />
                                <h6>{service.title}</h6>
                                <p><small>{service.description}</small></p>
                                </div>
                            </Col>
                        )}
                </Row>
            </Container>
        </div>
    );
};

export default Services;