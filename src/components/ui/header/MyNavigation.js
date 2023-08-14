import { styled } from "styled-components";
import Search from "./Search";
import MyMenu from "./MyMenu.js";
import LoginForm from "./LoginForm";

const MyWrapper = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
`;

function MyNavigation(props) {
    return (
        <MyWrapper>
            <Search searchHandler={props.searchHandler} search={props.search}/>
            <MyMenu />
            <LoginForm />

        </MyWrapper>
    )
}

export default MyNavigation;