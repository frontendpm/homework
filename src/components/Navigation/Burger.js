/*
This component is inspired on
https://github.com/maximakymenko/react-burger-menu-article-app
@maximakymenko
 */

import {bool, func} from 'prop-types';
import styled from 'styled-components';

const StyledBurger = styled.button`
    top:  20px;
    left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    margin-left: auto;
  
    @media screen and (min-width: 768px) {
        display: none;
    }
    
    span {
        width: 2rem;
        height: 0.25rem;
        border-radius: 10px;
        position: relative;
        transform-origin: 1px;
        background: #3f72af;
        :first-child {
        transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
        opacity: ${({open}) => open ? '0' : '1'};
        transform: ${({open}) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
        transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
`;

const Burger = ({open, setOpen}) => {
    const isExpanded = !!open;

    return (
        <StyledBurger
            aria-label="Toggle menu"
            aria-expanded={isExpanded}
            open={open}
            onClick={() => setOpen(!open)}>
            <span/>
            <span/>
            <span/>
        </StyledBurger>
    )
};

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Burger;