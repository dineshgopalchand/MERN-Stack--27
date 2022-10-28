import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tick from './Tick';
import SocialLink from './SocialLink';
import Marquee from '../../UI/Marquee';
const TopNotification = () => {
    return (
        <Container fluid className="top-notification-bar">
            <Row>
                <Col xs="auto">
                    <Tick />
                </Col>
                <Col>
                    <Marquee style={{ backgroundColor: 'rgb(199 199 199)' }}>
                        Some notification will go here.
                    </Marquee>
                </Col>
                <Col xs="auto">
                    <SocialLink />
                </Col>
            </Row>
        </Container>

    );
}

export default TopNotification;
