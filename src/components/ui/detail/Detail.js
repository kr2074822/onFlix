import { styled } from "styled-components";
import 'swiper/css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import DetailPost from "./DetailPost";
import DetailInfo from "./DetailInfo";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const DetailsWrapper = styled.div`

    display: flex;
    justify-content: left;
    align-items: flex-start;
    padding: 0 20px 20px;
`;

function Detail(props) {
    const api_key = 'e81185a43efae1fa764c99b459ac3548';
    const URL = 'https://api.themoviedb.org/3/movie/';
    const TV_URL = 'https://api.themoviedb.org/3/tv/';

    const location = useLocation();
    const movieInfo = location.state;
    const [genres, setGenres] = useState();
    const [trailer, settrailer] = useState();

    async function getDetail() {
        const detailRes = await fetch((movieInfo.title ? URL : TV_URL) + movieInfo.id + '?api_key=' + api_key);
        const detailResult = await detailRes.json();
        const temp = [];
        (detailResult.genres).forEach(e => temp.push(e.name));
        setGenres(temp);
    }

    async function getVideo() {
        const vidoeRes = await fetch((movieInfo.title ? URL : TV_URL)  + movieInfo.id + '/videos?api_key=' + api_key);
        const vidoeResult = await vidoeRes.json();
        console.log(vidoeResult);
        const temp = (vidoeResult.results).find((v) => v.type === 'Trailer')
        settrailer(temp);
    }

    useEffect(() => {
        getDetail();
        getVideo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => {
            window.scrollTo(0, 0);
        }
    }, [movieInfo]);

    return (
        <>
            <Header searchHandler={props.searchHandler} searchResetHandler={props.searchResetHandler} search={props.search} />
            <DetailsWrapper>
                <DetailPost path={movieInfo.poster_path} />
                <DetailInfo genres={genres} trailer={trailer} movieInfo={movieInfo} />
            </DetailsWrapper >
            <Footer />
        </>
    );
}

export default Detail;