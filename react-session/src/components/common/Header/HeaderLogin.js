import React from 'react'
import { Col, Nav, Row } from 'react-bootstrap'

const HeaderLogin = (props) => {
    console.log(props);
    const { loginDetails, onLogout: logoutHandler } = props;
    return (
        <Nav>
            <Row>
                {
                    loginDetails.isLogin && <>
                        <Col style={{ width: '250px' }}>
                            <Nav.Link > Welcome {loginDetails.userDetails.name}</Nav.Link>
                        </Col>
                    </>
                }
                <Col>
                    {!loginDetails.isLogin ? <Nav.Link >Login</Nav.Link> : <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>}
                </Col>

            </Row>
        </Nav>
    )
}

export default HeaderLogin