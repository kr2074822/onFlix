import { styled } from "styled-components";
import { CommonSpan } from "./CommonStyled";

const FindLink = styled.div`
    text-align: right;
    margin-bottom: 40px;
`;

const FindA = styled(CommonSpan).attrs({ as: 'a' })`
    margin-bottom: 0;
    display: initial;
`;

function Find(params) {
    return (
        <FindLink>
            <FindA href='#none'>Forgot password?</FindA>
        </FindLink>
    )
}

export default Find;