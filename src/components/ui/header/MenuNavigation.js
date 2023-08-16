import { styled } from "styled-components";
import Title from "./Title";
import Menu from "./Menu";
import { useDispatch } from "react-redux";
import { searchReset } from "./../../../store/store";

const MenuWrapper = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
`;

function MenuNavigation(props) {
    const dispatch = useDispatch();

    return (
        <MenuWrapper>
            <Title searchResetHandler={()=> {dispatch(searchReset())}}/>
            <Menu searchResetHandler={()=> {dispatch(searchReset())}}/>
        </MenuWrapper>

    )
}

export default MenuNavigation;