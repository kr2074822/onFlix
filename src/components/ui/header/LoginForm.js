import { styled } from "styled-components";
import { Link } from "react-router-dom";

const LoginFormWrapper = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;

    & > a {
        font-size: 16px;
        color: #f1f1f1;
    }
    & > a:not(:last-child) {
        margin-right: 10px;
    }

    @media (max-width: 767px) { 
        & > a {
            font-size: 14px;
        }

        & > a:not(:last-child) {
            margin-right: 8px;
        }
    }

    @media (max-width: 767px) { 
        & > a {
            font-size: 12px;
        }
    }
`;

function LoginForm(props) {
    return (
        <LoginFormWrapper>
            <Link to="/login">Login</Link>
            <Link to="/join">Sign Up</Link>
        </LoginFormWrapper>
    )
}

export default LoginForm;