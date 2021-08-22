import {string} from "prop-types";
import styled from "styled-components";

const StyledH1 = styled.h1`
    text-align: center;
`;

const PageTitle = ({children}) => {
    return <StyledH1>{children}</StyledH1>;
};

PageTitle.propTypes = {
    children: string.isRequired
};

export default PageTitle;