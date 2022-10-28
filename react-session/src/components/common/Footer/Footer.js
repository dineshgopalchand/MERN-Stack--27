import React from "react";
import { Col, Row } from "react-bootstrap";
import Address from "../Address/Address";
import Copyright from "./Copyright";
import './Footer.css';
import FooterCard from "./FooterCard";
const Footer = () => {
    return (
        <>
            <footer >
                <Row className="w-100">
                    <Col>
                        <FooterCard title="About Us">
                            <p>SDLC Training is an IT training institute that offers tailor-made courses to students and corporates who intend to hone their IT Skills. Our training portfolio covers programs that span across the Software Development Life Cycle, and hence the name.</p>
                        </FooterCard>
                    </Col>
                    <Col>
                        <FooterCard title="Easy Access">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><a href="#home">Home</a></li>
                                <li className="list-group-item"><a href="#about">About us</a></li>
                                <li className="list-group-item"><a href="#services">Services</a></li>
                                <li className="list-group-item"><a href="#contact">Contact us</a></li>
                                <li className="list-group-item"><a href="#reviews">Reviews</a></li>
                            </ul>
                        </FooterCard>
                    </Col>
                    <Col>
                        <FooterCard title="Contact us">
                           <Address/>
                        </FooterCard>
                    </Col>
                </Row>
            </footer>
            <Copyright />
        </>
    );
}

export default Footer;