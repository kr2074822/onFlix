import { styled } from "styled-components";

const MyMenuWrapper = styled.div`

`;

function MyMenu(props) {
    return (
        <MyMenuWrapper>
            <img src='images/userIcon.png' alt='myIcon' />
        </MyMenuWrapper>
    )
}

export default MyMenu;