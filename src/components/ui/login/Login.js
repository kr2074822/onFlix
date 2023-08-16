import { styled } from "styled-components";
import { useState } from "react";
import LoginInput from "./LoginInput";
import Find from "./Find";
import LoginButton from "./LoginButton";


const LoginForm = styled.form`
    width: 100%;
    margin-bottom: 40px;
`;


function Login(props) {

    const [info, setInfo] = useState({id: '', pw: ''});
    const setCheckFn = props.setCheckFn;
    const seInfoFn = function (value) {
        setInfo(value);
    }



    return (
        <LoginForm>
            <LoginInput info={info} seInfoFn={seInfoFn} />
            <Find />
            <LoginButton text="Login" info={info} setCheckFn={setCheckFn} type="login"/>
        </LoginForm>
    )
}

export default Login