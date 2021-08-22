import {useState} from "react";

import {Container, Row, Col} from 'react-bootstrap';
import logo from '../../logo.svg';
import Burger from "../../components/Navigation/Burger";
import Navigation from "../../components/Navigation/Navigation";

const Header = () => {
    const [open, setOpen] = useState(false);
    const menuId = "main-menu";

    return (
        <header>
            <Container>
                <Row className="align-items-center" style={{position: "relative"}}>
                    <Col xs={8} md={3}>
                        <img src={logo} alt="logo"/>
                    </Col>
                    <Col xs={4} md={9}>
                        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                        <Navigation open={open} setOpen={setOpen} menuId={menuId} />
                    </Col>
                </Row>
            </Container>
        </header>
    )
};

export default Header;