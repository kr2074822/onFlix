import { styled } from "styled-components";
import Search from "./Search";
import MyMenu from "./MyMenu";

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
        </MyWrapper>
    )
}

export default MyNavigation;