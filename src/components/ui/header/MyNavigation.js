import { styled } from "styled-components";
import Search from "./Search";
import MyMenu from "./MyMenu.js";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";

const MyWrapper = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
`;

function MyNavigation(props) {

    let loginChk = useSelector((state) => state.login);
    return (
        <MyWrapper>
            <Search />
            {
                loginChk.value ?
                    <MyMenu />
                    :
                    <LoginForm />
            }
        </MyWrapper>
    )
}

export default MyNavigation;