import {NavLink} from "react-router-dom";
import {ROUTES_CONFIG} from "../../utils/routes";
import styled from "styled-components";
import {useMediaPredicate} from "react-media-hook";
import {bool, func, string} from "prop-types";

const StyledNav = styled.nav`
    position: absolute;
    top: 100%;
    left:0;
    right:0;
    background: #fff;
    display: ${({open}) => open ? 'block' : 'none'};
    
    @media screen and (min-width: 768px) {
        display: block;
        position: static;
    }
    
    ul {
        list-style:none;
        margin:0;
        padding:0;
        display: flex;
        justify-content: flex-end;
        align-items: middle;
        flex-direction: column;
        padding: 0 12px;
        
        @media screen and (min-width: 768px) {
            flex-direction: row;
            padding: 0;
        }
        
        li {
            text-align: right;
        
            @media screen and (min-width: 768px) {
                margin-left: 10px;
            }
        }
        
        a {
           color: #3f72af;
           text-decoration: none;
           font-size: 24px;
           font-weight: bold;
        
            @media screen and (min-width: 768px) {
                font-size: 18px;
                font-weight: normal;
            }
           
           &.active {
            text-decoration: underline;
           }
        }
    }
`;

const Navigation = ({open, setOpen, menuId}) => {
    const isMobile = useMediaPredicate("(max-width: 767px)");

    const isHidden = () => {
        return isMobile ? !open : "false";
    };

    return <StyledNav aria-hidden={isHidden()} open={open} id={menuId}>
        <ul>
            <li>
                <NavLink
                    onClick={() => setOpen(!open)}
                    exact
                    to={ROUTES_CONFIG.EDIT_PROFILE.path}>{ROUTES_CONFIG.EDIT_PROFILE.anchor}</NavLink>
            </li>
            <li>
                <NavLink
                    onClick={() => setOpen(!open)}
                    exact
                    to={ROUTES_CONFIG.SHOW_PROFILE.path}>{ROUTES_CONFIG.SHOW_PROFILE.anchor}</NavLink>
            </li>
        </ul>
    </StyledNav>
};

Navigation.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
    menuId: string
};

export default Navigation;