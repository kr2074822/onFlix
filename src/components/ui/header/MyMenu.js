import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { loginHandler, searchReset } from "../../../store/store";

const MyMenuWrapper = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    & > img {
        margin-right: 10px;
    }
    & > a {
        color: #f1f1f1;
    }
`;

function MyMenu(props) {

    const dispatch = useDispatch();
    const logoutHandler = function() {
        dispatch(loginHandler());
        dispatch(searchReset());
    }

    return (
        <MyMenuWrapper>
            <img src={process.env.PUBLIC_URL + '/images/userIcon.png'} alt='myIcon' />
            <Link to="/" onClick={logoutHandler}>Log Out</Link>
        </MyMenuWrapper>
    )
}

export default MyMenu;