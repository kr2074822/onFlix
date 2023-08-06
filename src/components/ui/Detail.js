import { styled } from "styled-components";
import 'swiper/css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import DetailPost from "./DetailPost";
import DetailInfo from "./DetailInfo";

const DetailsWrapper = styled.div`

    display: flex;
    justify-content: left;
    align-items: flex-start;
    padding: 0 20px;
    margin-bottom: 20px;
`;

function Detail(props) {
    const api_key = 'e81185a43efae1fa764c99b459ac3548';
    const URL = 'https://api.themoviedb.org/3/movie/';

    const location = useLocation();
    const movieInfo = location.state;
    const [genres, setGenres] = useState();
    const [trailer, settrailer] = useState();

    // https://api.themoviedb.org/3/movie/457332?api_key=e81185a43efae1fa764c99b459ac3548


    // 'https://api.themoviedb.org/3/movie/457332/videos?api_key=e81185a43efae1fa764c99b459ac3548'
    // 'https://api.themoviedb.org/3/movie/667538/videos?api_key=e81185a43efae1fa764c99b459ac3548'

    async function getDetail() {
        const detailRes = await fetch(URL + movieInfo.id + '?api_key=' + api_key);
        const detailResult = await detailRes.json();
        const temp = [];
        (detailResult.genres).forEach(e => temp.push(e.name));
        setGenres(temp);
    }

    async function getVideo() {
        const vidoeRes = await fetch(URL + movieInfo.id + '/videos?api_key=' + api_key);
        const vidoeResult = await vidoeRes.json();
        const temp = (vidoeResult.results).find((v) => v.type === 'Trailer')
        settrailer(temp);
    }

    useEffect(() => {
        getDetail();
        getVideo();
    });

    return (
        <DetailsWrapper>
            <DetailPost path={ movieInfo.poster_path } />
            <DetailInfo genres={genres} trailer={trailer} movieInfo={movieInfo}></DetailInfo>
        </DetailsWrapper >
    );
}

export default Detail;