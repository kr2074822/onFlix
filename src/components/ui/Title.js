import { styled } from "styled-components";
import { Link } from "react-router-dom";

const TitleWrapper = styled.div`
    & > a {
        font-size: 50px;
        font-weight: bold;
        color: #e50914;
    }
    margin-right: 40px;
`;

function Title(props) {
    const searchResetHandler = props.searchResetHandler;

    return (
        <TitleWrapper>
            <Link to="/" onClick={searchResetHandler} >Onflix</Link>
        </TitleWrapper>
    )
}

export default Title;