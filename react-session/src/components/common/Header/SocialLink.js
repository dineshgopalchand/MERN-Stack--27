import React  from "react";
import { Col, Row } from "react-bootstrap";

const SocialLink=()=> {
    return (
        <Row>
            <Col>
                <a href="#" >
                    <i className="fa-brands fa-facebook"></i>
                </a>
            </Col>
            <Col>
                <i className="fa-brands fa-twitter"></i>
            </Col>
            <Col>
                <a href="#" >
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </Col>
            <Col>
                <a href="#" >
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </Col>
            <Col>
                <a href="#" >
                    <i className="fa-brands fa-tumblr"></i>
                </a>
            </Col>
        </Row>
    );
}

export default SocialLink;