import { styled } from "styled-components";
import 'swiper/css';
import Genre from "./Genre";
import DetailTitle from "./DetailTitle";
import MovieRate from "./MovieRate";

const DetailMovieWrapper = styled.div`
    & > p {
        color: #D1D1D1;
        font-size: 20px;
        line-height: 1.3;
        font-weight: 100;
    }
    @media (max-width: 767px) {  
        & > p {
            font-size: 16px;
        }
    }
`;


function DetailMovie(props) {
    const movieInfo = props.movieInfo;
    const genres = props.genres;
    return (

        <DetailMovieWrapper>
            <DetailTitle movieInfo={movieInfo} />
            <MovieRate movieInfo={movieInfo} ></MovieRate>
            <Genre genres={genres} />
            <p>{movieInfo.overview}</p>
        </DetailMovieWrapper>
    );
}

export default DetailMovie;