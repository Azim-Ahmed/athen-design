import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import achievementPhoto1 from '../../../Assests/Illustration/smile.png';
import achievementPhoto2 from '../../../Assests/Illustration/marketing@2x.png'
import achievementPhoto3 from '../../../Assests/Illustration/surface1@2x.png'
import achievementPhoto4 from '../../../Assests/Illustration/transportation@2x.png'
import './Achievement.scss'




const Achievement = () => {

    const achievementData = [
        {
            title: "700+",
            description: "Happy Clients",
            photo: achievementPhoto1,
            id: 1,
        },
        {
            title: "140+",
            description: "Prjects Completed",
            photo: achievementPhoto2,
            id: 2,
        },
        {
            title: "25+",
            description: "Crazy Minds",
            photo: achievementPhoto3,
            id: 3,
        },
        {
            title: "75+",
            description: "Running Projects",
            photo: achievementPhoto4,
            id: 4
        }
    ]
    return (
        <div className="achievementsection  py-5">
        <Container>
          
            <Row>
                <Col md={4} lg={4} sm={12} xs={12}>
                    <div>
                        <h1 className="runningProjectHeader">Our Achievements</h1>
                        <p><small>It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout. The
                        point of using Lorem Ipsum is that it has a more-or-less normal
distribution of letter</small></p>
                    </div>

                </Col>
                <Col md={8} lg={8} sm={12} xs={12}>

                    <Row className="text-center">
                        {
                            achievementData.map(item =>


                                <Col md={5} lg={5} sm={12} xs={12}>

                                    <div className="cardArea d-flex justify-content-around mb-4 d-flex  align-items-center">
                                        <img src={item.photo} className="pl-2 ml-2 img-fluid" style={{height:"50px"}} alt="" />

                                        <div className="pr-2 py-3 mr-2">
                                            <h2>{item.title}</h2>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>

                                </Col>

                            )
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Achievement;