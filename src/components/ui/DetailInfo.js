import { styled } from "styled-components";
import 'swiper/css';
import DetailTrailer from "./DetailTrailer";
import DetailMovie from "./DetailMovie";

const DetailInfoWrapper = styled.div`
    width: 100%;
`;



function DetailInfo(props) {

    const movieInfo = props.movieInfo;
    const trailer = props.trailer;
    const genres = props.genres;
    return (
        <DetailInfoWrapper>
            <DetailTrailer trailer={trailer} />
            <DetailMovie genres={genres} movieInfo={movieInfo}/>
        </DetailInfoWrapper>
    );
}

export default DetailInfo;