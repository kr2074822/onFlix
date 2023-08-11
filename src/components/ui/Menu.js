import { styled } from "styled-components";
import { Link } from "react-router-dom";

const MenuListWrapper = styled.div`
    & ul {
        display: flex;
        justify-content: left;
        align-items: center;
    }

    & ul > a {
        color: #f1f1f1;
        cursor: pointer;
    }
    & ul > a:not(:last-child) {
        margin-right: 15px;
    }
    
`;


function Menu(props) {
    const searchResetHandler = props.searchResetHandler;

    return (
        <MenuListWrapper>
            <ul>
                <Link to='/' onClick={searchResetHandler} >Home</Link>
                <Link onClick={searchResetHandler} >TV Shows</Link>
                <Link onClick={searchResetHandler} >Movie</Link>
            </ul>
        </MenuListWrapper>
    )
}

export default Menu;