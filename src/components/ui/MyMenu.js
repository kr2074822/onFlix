import { styled } from "styled-components";

const MyMenuWrapper = styled.div`

`;

function MyMenu(props) {
    return (
        <MyMenuWrapper>
            <img src={process.env.PUBLIC_URL + '/images/userIcon.png'} alt='myIcon' />
        </MyMenuWrapper>
    )
}

export default MyMenu;