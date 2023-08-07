import { styled } from "styled-components";
import 'swiper/css';

const MovieRateWrapper = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    margin-bottom: 10px;

    &>span {
        color: #D1D1D1;
        margin-right: 10px;
    }

`;

const Rate = styled.div`
    background-image: url(${process.env.PUBLIC_URL + '/images/off_rate.png'});
    width: 96px;
    height: 16px;
    background-size: contain;
    background-repeat: no-repeat;
`;

const RateFill = styled.div`
    background-image: url(${process.env.PUBLIC_URL + '/images/on_rate.png'});
    width: ${props => props.rate}%;
    height: 16px;
    background-size: cover;
    background-repeat: no-repeat;
`


function MovieRate(props) {

    const movieInfo = props.movieInfo;
    const rate = (movieInfo.vote_average)*10
    return (
        <MovieRateWrapper>
            <span>Rate : </span>
            <Rate>
                <RateFill rate={rate}></RateFill>
            </Rate>
        </MovieRateWrapper>
    );
}

export default MovieRate;