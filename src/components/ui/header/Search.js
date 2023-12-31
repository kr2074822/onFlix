import { styled } from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { searchQuery } from "./../../../store/store";

const SearchWrapper = styled.div`
    padding-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    & input {
        width: 200px;
        height: 30px;
        border: none;
        background-color: #000000;
        border-bottom: 1px solid #D1D1D1;
        outline: none;
        color: #D1D1D1;
    }

    @media (max-width: 1024px) {  
        padding-right: 14px;

        & input {
            font-size: 14px;
            width: 150px;
        }
    }

    @media (max-width: 767px) {  
        padding-right: 8px;

        & input {
            font-size: 12px;
            width: 100px;
        }
    }

`;

const SearchBtnWrapper = styled.button`
    height: 30px;
    background: #000000;
    border: none;
    cursor: pointer;

    & .seacrch_icon {
        font-size: 25px;
        color: #D1D1D1;
    }

    @media (max-width: 1024px) {  
        & .seacrch_icon {
            font-size: 18px;
        }
    }

    @media (max-width: 1024px) {  
        & .seacrch_icon {
            font-size: 14px;
        }
    }
`;




function Search(props) {
    // const searchHandler = props.searchHandler;
    // const search = props.search;

    const dispatch = useDispatch();
    let searchHandle = function(e) {
        dispatch(searchQuery(e.target.value))
    }

    let searchItem = useSelector((state) => state.search.value);



    return (
        <SearchWrapper>
            {/* <input type='text' placeholder="Movie, TV Show" value={search} onChange={(searchHandler)} /> */}
            <input type='text' placeholder="Movie, TV Show" value={searchItem} onChange={(searchHandle)} />
            <SearchBtnWrapper><FaSearch className='seacrch_icon' /></SearchBtnWrapper>
        </SearchWrapper>
    )
}

export default Search;