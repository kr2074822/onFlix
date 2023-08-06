import { styled } from "styled-components";
import 'swiper/css';
import Genre from "./Genre";

const DetailMovieWrapper = styled.div`
    & > span {
        display: block;
        color: #D1D1D1;
        font-size: 50px;
        margin-bottom: 20px;
        font-weight: 700;
    }
    
    & > p {
        color: #D1D1D1;
        font-size: 20px;
        line-height: 1.3;
        font-weight: 100;
    }

`;



function DetailMovie(props) {
    const movieInfo = props.movieInfo;
    const genres = props.genres;
    return (

        <DetailMovieWrapper>
            <span>{movieInfo.title}</span>
            <Genre genres={genres} />
            {/* <ul>
                {
                    genres !== undefined ?
                        genres.map((v, i) => {
                            return (
                                <li key={i}>{v}</li>
                            )
                        })
                        : null
                }
            </ul> */}
            <p>
                {movieInfo.overview}
            </p>
        </DetailMovieWrapper>
    );
}

export default DetailMovie;