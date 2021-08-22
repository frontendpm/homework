import {Container, Row, Col} from "react-bootstrap";
import styled from "styled-components";

const StyledFooter = styled.footer`
    background: #3f72af;
    color: white;
    
    small {
        padding: 40px 0;
        display: block;
        text-align: center;
        
        @media screen and (min-width: 768px) {
            text-align: left;
        }
    }
`;
const Footer = () => {
    return <StyledFooter>
        <Container>
            <Row>
                <Col>
                    <small>&copy; Copyright 2021, Paweł Maślanka</small>
                </Col>
            </Row>
        </Container>
    </StyledFooter>;
};

export default Footer;