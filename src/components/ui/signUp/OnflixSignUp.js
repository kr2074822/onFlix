import { styled } from "styled-components";
import Title from "../login/Title";
import Signup from "./Signup";

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

function OnflixSignUp() {
    
    return (
        <OnflixLoginWrapper>
            <Title title="Sign Up" />
            <Signup />

        </OnflixLoginWrapper>
    )
}

export default OnflixSignUp;