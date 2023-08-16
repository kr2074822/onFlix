import { styled } from "styled-components";
import Title from "./Title";
import Menu from "./Menu";

const MenuWrapper = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
`;

function MenuNavigation() {

    return (
        <MenuWrapper>
            <Title />
            <Menu />
        </MenuWrapper>

    )
}

export default MenuNavigation;