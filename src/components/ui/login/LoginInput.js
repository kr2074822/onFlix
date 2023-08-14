import { styled } from "styled-components";
import InputWrapper from "./InputWrapper";

const InputForm = styled.div`
    margin-bottom: 10px;
`;

function LoginInput(props) {
    let info = props.info;
    const seInfoFn = props.seInfoFn;

    return (

        <InputForm>
            <InputWrapper type='text' placeholder='👤 Type your ID' label="ID" info={info} seInfoFn={seInfoFn} />
            <InputWrapper type='password' placeholder="🔒 Type your Password" label="Password" info={info} seInfoFn={seInfoFn}/>
        </InputForm>
    )
}

export default LoginInput;