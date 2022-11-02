import React from 'react'
import { Col, Nav, Row } from 'react-bootstrap'
import { AuthContext } from '../../../store/auth-context';

const HeaderLogin = () => {
    return (
        <AuthContext.Consumer>
            {(authCtx) => {
                console.log({ authCtx });
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
            }}

        </AuthContext.Consumer>
    )
}

export default HeaderLogin