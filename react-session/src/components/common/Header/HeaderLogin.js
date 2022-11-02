import React from 'react'
import { useContext } from 'react';
import { Col, Nav, Row } from 'react-bootstrap'
import { AuthContext } from '../../../store/auth-context';

const HeaderLogin = () => {
    const authCtx = useContext(AuthContext);
    const { isLogin, userLogoutHandler, userDetails } = authCtx;
    return (
        <Nav>
            <Row>
                {
                    isLogin && <>
                        <Col style={{ width: '250px' }}>
                            <Nav.Link > Welcome {userDetails.name}</Nav.Link>
                        </Col>
                    </>
                }
                <Col>
                    {!isLogin ? <Nav.Link >Login</Nav.Link> : <Nav.Link onClick={userLogoutHandler}>Logout</Nav.Link>}
                </Col>

            </Row>
        </Nav>


    )
}

export default HeaderLogin