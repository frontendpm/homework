import {Container, Row, Col} from "react-bootstrap";
import styled from "styled-components";

const Footer = () => {
    const FooterStyled = styled.footer`
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

    return <FooterStyled>
        <Container>
            <Row>
                <Col>
                    <small>&copy; Copyright 2021, Paweł Maślanka</small>
                </Col>
            </Row>
        </Container>
    </FooterStyled>;
};

export default Footer;