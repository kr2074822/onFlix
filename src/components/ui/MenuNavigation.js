import { styled } from "styled-components";
import Title from "./Title";
import Menu from "./Menu";


const MenuWrapper = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
`;

function MenuNavigation(props) {
    return (
        <MenuWrapper>
            <Title searchResetHandler={props.searchResetHandler}/>
            <Menu searchResetHandler={props.searchResetHandler}/>
        </MenuWrapper>

    )
}

export default MenuNavigation;