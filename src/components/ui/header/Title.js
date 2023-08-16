import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { menuTypeHandler, searchReset } from "../../../store/store";

const TitleWrapper = styled.div`
    & > a {
        font-size: 50px;
        font-weight: bold;
        color: #e50914;
    }
    margin-right: 40px;
`;

function Title(props) {
    const dispatch = useDispatch();
    
    return (
        <TitleWrapper>
            <Link to="/" onClick={() => { dispatch(searchReset()); dispatch(menuTypeHandler('all')); }} >Onflix</Link>
        </TitleWrapper>
    )
}

export default Title;