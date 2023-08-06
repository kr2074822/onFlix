import { styled } from "styled-components";
import { FaSearch } from "react-icons/fa";

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
`;



function Search(props) {
    return (
        <SearchWrapper>
            <input type='text' placeholder="Movie, TV Show" />
            <SearchBtnWrapper><FaSearch className='seacrch_icon'></FaSearch></SearchBtnWrapper>
        </SearchWrapper>
    )
}

export default Search;