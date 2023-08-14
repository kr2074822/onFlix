import { styled } from "styled-components";
import 'swiper/css';

const TitleWrapper = styled.div`
    display: flex;
    justify-content: left;
    align-items: flex-end;
    margin-bottom: 20px;
`;

const Title =styled.span`
    color: #D1D1D1;
    font-size: 50px;
    font-weight: 700;
    margin-right: 10px;
`;

const ReleaseDate = styled.span`
    font-size: 16px;
    color: #D1D1D1;
`;

function DetailTitle(props) {
    const movieInfo = props.movieInfo;
    console.log(props);
    return (
        <TitleWrapper>
            <Title>{movieInfo.title || movieInfo.name}</Title>
            <ReleaseDate>{(movieInfo.release_date || movieInfo.first_air_date).substr(0, 4)}</ReleaseDate>
        </TitleWrapper>
    );
}

export default DetailTitle;