import { styled } from "styled-components";

const SnsLink = styled.div`
    & a {
        &:not(:last-child) {
            margin-right: 10px;
        }
    }
    & img {
        width: 40px;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

function SnsSignLink(params) {
    return (
        <SnsLink>
            <a href='#none'><img src={process.env.PUBLIC_URL + '/images/facebook_icon.png'} alt='facebook'></img></a>
            <a href='#none'><img src={process.env.PUBLIC_URL + '/images/twitter_icon.png'} alt='twitter'></img></a>
            <a href='#none'><img src={process.env.PUBLIC_URL + '/images/google_icon.png'} alt='google'></img></a>
        </SnsLink>
    )
}

export default SnsSignLink;