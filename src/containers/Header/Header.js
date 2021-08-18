import React from "react";
import {Link} from "react-router-dom";

import {Container, Row, Col} from 'react-bootstrap';
import logo from '../../logo.svg';

const Header = () => {
    return (
        <header>
            <Container>
                <Row>
                    <Col md={3}>
                        <img src={logo} alt="logo"/>
                    </Col>
                    <Col>
                        <nav>
                            <ul>
                                <li><Link to="/">Profile Form</Link></li>
                                <li><Link to="/profile">Show profile</Link></li>
                            </ul>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </header>
    )
};

export default Header;