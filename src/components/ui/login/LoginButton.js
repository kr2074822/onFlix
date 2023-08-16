import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { loginHandler, userHandler } from "../../../store/store";
import { useNavigate } from "react-router";

const LoginBtn = styled.div`
    & button {
        width: 100%;
        height: 50px;
        border-radius: 100px;
        color: #FFFFFF;
        background-color: #000000;
        border: none;
        cursor: pointer;
        font-weight: bold;
    }
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;




function LoginButton(props) {
    const type = props.type;
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submitHandler = function (type) {
        if (type === 'join') {
            alert("Welcome Onfilx !");
            window.localStorage.setItem('localUser', JSON.stringify(user));
            navigate('/login');
            dispatch(userHandler(''));
        } else {
            let localUser = JSON.parse(window.localStorage.getItem('localUser'));
            if (user.id === localUser.id && user.pw === localUser.pw) {
                alert(`Welcome ${localUser.id} !`);
                dispatch(loginHandler());
                navigate('/');
            } else {
                alert(`Check your ID or Password`);
            }
        }
    }

    return (
        <LoginBtn>
            <button onClick={(e) => {
                submitHandler(type);
                e.preventDefault();
            }}>{props.text}</button>
        </LoginBtn>
    )
}

export default LoginButton;

















