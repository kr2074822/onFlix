import { styled } from "styled-components";

const DetailPostWrapper = styled.div`
    & img {
        margin-right: 20px;
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