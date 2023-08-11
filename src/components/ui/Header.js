import { styled } from "styled-components";
import MenuNavigation from "./MenuNavigation";
import MyNavigation from "./MyNavigation";

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #000000;
    padding: 20px;
    margin-bottom: 30px;
`;




function Header(props) {
    return (
        <HeaderWrapper>
            <MenuNavigation searchResetHandler={props.searchResetHandler} />
            <MyNavigation searchHandler={props.searchHandler} search={props.search}/>
        </HeaderWrapper>
    )
}

export default Header;