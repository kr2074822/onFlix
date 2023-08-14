import { styled } from "styled-components";
import { useState } from "react";
import Login from "./Login";
import SnsSign from "./SnsSign";
import Join from "./Join";
import Title from "./Title";



const OnflixLoginWrapper = styled.div`
    width: 400px;
    height: 700px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #F1F1F1;
    padding: 50px 30px;
    border-radius: 10px;
`;

function OnflixLogin() {
    const [check, setCheck] = useState(false);
    function setCheckFn(value) {
        console.log(value);
        setCheck(value);
    };

    return (
        <OnflixLoginWrapper>
            {
                check === false ?
                    <>
                        <Title title="Login" />
                        <Login setCheckFn={setCheckFn} />
                        <SnsSign />
                        <Join />

                    </>
                    :
                    <>
                        <p>로그인 성공!</p>
                        <button onClick={()=>{setCheck(false)}}>로그아웃</button>
                    </>
            }
        </OnflixLoginWrapper>
    )
}

export default OnflixLogin;