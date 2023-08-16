import { styled } from "styled-components";

const DetailPostWrapper = styled.div`
    & img {
        margin-right: 20px;
    }
    @media (max-width: 1024px) {  

        margin-bottom: 20px;
        & img {
            width: 350px;
            margin: initial;
        }
    }
    @media (max-width: 767px) {  

        & img {
            width: 100%;
        }
    }
`;

function DetailPost(props) {
    return (
        <DetailPostWrapper>
            <img src={'https://image.tmdb.org/t/p/w500' + props.path} alt="post" />
        </DetailPostWrapper>
    );
}

export default DetailPost;