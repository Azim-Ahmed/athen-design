import React from 'react';
import {
    Container, Row, Col, Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './Dedication.scss'

const DedicatedTeam = () => {

    const teamData = [
        {
            title: "For Basic",
            description: "Homepage",
            type: "No Inner Page",
            assest: "Asset file",
            source: "Source file",
            stock: "Free Stock Photos",
            support: "10 Days Free Support",
            extra: "24/7 Support",
            price: 199,

        },
        {
            title: "For Preferred",
            description: "Homepage",
            assest: "Asset file",
            source: "Source file",
            stock: "Free Stock Photos",
            support: "20 Days Free Support",
            extra: "24/7 Support",
            type: "4 Inner Page",
            price: 399,

        },
        {
            title: "For Elite",
            description: "Homepage",
            assest: "Asset file",
            source: "Source file",
            stock: "Free Stock Photos",
            support: "30 Days Free Support",
            extra: "24/7 Support",
            type: "8 Inner Page",
            price: 599,

        },

    ]
    return (
        <div className="serviceBackground">
        <Container className="mt-5">
            
            <h1 className="runningProjectHeader text-center my-3">Choose Your Dedicated Team</h1>
            <Row>
                {
                    teamData.map(item =>

                        <Col className="text-center my-4" md={6} lg={4} sm={12} xs={12}>
                            <Card className="cardSection">
                                <CardBody>
                                    <CardTitle className="header mb-4" tag="h2">${item.price}</CardTitle>
                                    <CardSubtitle tag="h6" className="my-3 subtitleBorder">{item.title}</CardSubtitle>
                                  
                                    <CardText>{item.description}</CardText>
                                    <CardText>{item.type}</CardText>
                                    <CardText>{item.assets}</CardText>
                                    <CardText>{item.source}</CardText>
                                    <CardText>{item.stock}</CardText>
                                    <CardText>{item.support}</CardText>
                                    <CardText>{item.extra}</CardText>
                                    <CardText><button className="btnAchievement align-items-center">Order now</button></CardText>
                                    
                                    
                                    
                                </CardBody>
                            </Card>
                        </Col>)
                }
            </Row>
        </Container>
        </div>
    );
};

export default DedicatedTeam;