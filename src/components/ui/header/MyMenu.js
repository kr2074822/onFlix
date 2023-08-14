import { Link } from "react-router-dom";
import { styled } from "styled-components";

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
    return (
        <MyMenuWrapper>
            <img src={process.env.PUBLIC_URL + '/images/userIcon.png'} alt='myIcon' />
            <Link to="/">Log Out</Link>
        </MyMenuWrapper>
    )
}

export default MyMenu;