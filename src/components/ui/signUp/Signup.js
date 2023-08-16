import { styled } from "styled-components";
import Find from "../login/Find";
import LoginButton from "../login/LoginButton";
import SignUpInput from "./SignUpInput";

const SignupForm = styled.form`
    width: 100%;
    margin-bottom: 40px;
`;


function Signup(props) {

    return (
        <SignupForm>
            <SignUpInput />
            <Find />
            <LoginButton text="Sign Up" type="join"/>

        </SignupForm>
    )
}

export default Signup;