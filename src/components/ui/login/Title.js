import { styled } from "styled-components";

const LoginTitle = styled.div`
    width: 100%;
    margin-bottom: 40px;
`;

const TitleSpan = styled.span`
    display: block;
    width: 100%;
    font-size: 40px;
    text-align: center;
    font-weight: bold;
`


function Title(props) {
    return (
        <LoginTitle>
            <TitleSpan>{props.title}</TitleSpan>
        </LoginTitle>
    )
}

export default Title;