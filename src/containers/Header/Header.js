import {NavLink} from "react-router-dom";

import {Container, Row, Col} from 'react-bootstrap';
import logo from '../../logo.svg';
import {ROUTES_CONFIG} from "../../utils/routes";
import styled from "styled-components";

const StyledNav = styled.nav`
ul {
    list-style:none;
    margin:0;
    padding:0;
    display: flex;
    justify-content: flex-end;
    align-items: middle;
    
    li {
        margin-left: 10px;
    }
    
    a {
       color: #3f72af;
       text-decoration: none;
    }
}
`;
const Header = () => {
    return (
        <header>
            <Container>
                <Row  className="align-items-md-center">
                    <Col xs={6} md={3}>
                        <img src={logo} alt="logo"/>
                    </Col>
                    <Col xs={6} md={9}>
                        <StyledNav>
                            <ul>
                                <li>
                                    <NavLink to={ROUTES_CONFIG.EDIT_PROFILE.path}>{ROUTES_CONFIG.EDIT_PROFILE.anchor}</NavLink>
                                </li>
                                <li>
                                    <NavLink to={ROUTES_CONFIG.SHOW_PROFILE.path}>{ROUTES_CONFIG.SHOW_PROFILE.anchor}</NavLink>
                                </li>
                            </ul>
                        </StyledNav>
                    </Col>
                </Row>
            </Container>
        </header>
    )
};

export default Header;