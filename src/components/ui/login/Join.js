import { styled } from "styled-components";
import { CommonSpan } from "./CommonStyled";
import { Link } from "react-router-dom";

const SignUp = styled.div`
    & a {
        font-size: 12px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

function Join(params) {
    return (
        <SignUp>
            <CommonSpan>Or Sign Up Using</CommonSpan>
            <Link to='/join'>SIGN UP</Link>
        </SignUp>
    )
}

export default Join;