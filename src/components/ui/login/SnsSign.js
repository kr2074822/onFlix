import { styled } from "styled-components";
import { CommonSpan } from "./CommonStyled"; 
import SnsSignLink from "./SnsSignLink";

const SnsSignWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 90px;
`;

function SnsSign(params) {
    return (
        <SnsSignWrapper>
            <CommonSpan>Or Sign Up Using</CommonSpan>
            <SnsSignLink />
        </SnsSignWrapper>
    )
}

export default SnsSign;