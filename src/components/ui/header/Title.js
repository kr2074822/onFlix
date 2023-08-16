import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { menuTypeHandler, searchReset } from "../../../store/store";

const TitleWrapper = styled.div`
    margin-right: 40px;

    & > a {
        font-size: 50px;
        font-weight: bold;
        color: #e50914;
    }

    @media (max-width: 1024px) {  
        margin-right: 20px;

        & > a {
            font-size: 40px;
        }
    }

    @media (max-width: 767px) {  
        margin-right: 10px;

        & > a {
            font-size: 32px;
        }
    }
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