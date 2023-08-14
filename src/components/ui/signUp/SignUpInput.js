import { styled } from "styled-components";
import InputWrapper from "../login/InputWrapper";

const InputForm = styled.div`
    margin-bottom: 10px;
`;


function SignUpInput(props) {

    return (
        <InputForm>
            <InputWrapper type='text' placeholder='Type your ID' label="ID"/>
            <InputWrapper type='password' placeholder="Type your Password" label="Password" />
        </InputForm>
    )
}

export default SignUpInput;