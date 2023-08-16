import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { menuTypeHandler, searchReset } from "./../../../store/store";

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
    const dispatch = useDispatch();


    return (
        <MenuListWrapper>
            <ul>
                <Link to='/' onClick={() => { dispatch(searchReset()); dispatch(menuTypeHandler('all')); }} >Home</Link>
                <Link to='/tvshow' onClick={() => { dispatch(searchReset()); dispatch(menuTypeHandler('tvshow')); }}  >TV Shows</Link>
                <Link to='/movie' onClick={() => { dispatch(searchReset()); dispatch(menuTypeHandler('movie')); }} >Movie</Link>
            </ul>
        </MenuListWrapper>
    )
}

export default Menu;