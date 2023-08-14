import { styled } from "styled-components";

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
    const myInfo = props.info;
    return (
        <LoginBtn>
            <button onClick={(e) => {
                // checkInfo(myInfo, props.setCheckFn);
                e.preventDefault();
            }}>{props.text}</button>
        </LoginBtn>
    )
}


// function checkInfo(info, setCheckFn) {
//     if (info.id === userInfo.id && info.pw === userInfo.pw) {
//         alert('로그인 성공');
//         setCheckFn(true);
//     } else {
//         alert('로그인 실패');
//     }
// }

export default LoginButton;

















