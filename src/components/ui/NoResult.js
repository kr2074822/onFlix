import { styled } from "styled-components";

const NoResultWrapper = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;

    & p {
        font-size: 40px;
        color: #D1D1D1;
    }
`;


function NoResult(props) {
    return (
        <NoResultWrapper>
            <p>Your search for "{props.search}" did not have any matches.</p>
        </NoResultWrapper>
    )
}

export default NoResult;