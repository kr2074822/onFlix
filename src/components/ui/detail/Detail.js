import { styled } from "styled-components";
import 'swiper/css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import DetailPost from "./DetailPost";
import DetailInfo from "./DetailInfo";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Section from "../main/Section";
import { useQuery } from "react-query";
const DetailsWrapper = styled.div`
    display: flex;
    justify-content: left;
    align-items: flex-start;
    padding: 0 20px 20px;

    @media (max-width: 1024px) {  
        flex-direction: column;
        align-items: center;
    }
    margin-bottom: 20px;
`;

const SectionWrapper = styled.div`
    padding: 0 20px;
`;

function Detail(props) {
    const api_key = 'e81185a43efae1fa764c99b459ac3548';
    const URL = 'https://api.themoviedb.org/3/movie/';
    const TV_URL = 'https://api.themoviedb.org/3/tv/';
    const location = useLocation();
    const movieInfo = location.state;

    const { isLoading: recoLoding, error: recoErr, data: recoData, isFetching: recoFetch } = useQuery("recoData", async () => await fetch((movieInfo.title ? URL : TV_URL) + movieInfo.id + '/similar?api_key=' + api_key).then((res) => res.json()));
    const { isLoading: detailLoding, error: detailErr, data: detailData, isFetching: detailFetch } = useQuery("detailData", async () => await fetch((movieInfo.title ? URL : TV_URL) + movieInfo.id + '?api_key=' + api_key).then((res) => res.json()));
    const { isLoading: videoLoding, error: videoErr, data: videoData, isFetching: videoFetch } = useQuery("videoData", async () => await fetch((movieInfo.title ? URL : TV_URL) + movieInfo.id + '/videos?api_key=' + api_key).then((res) => res.json()));



    useEffect(() => {
        return () => {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <>
            <Header />
            <DetailsWrapper>
                <DetailPost path={movieInfo.poster_path} />
                <DetailInfo genres={detailLoding === false ? detailData.genres : ''} trailer={videoLoding === false ? (videoData.results).find((v) => v.type === 'Trailer') : ''} movieInfo={movieInfo} />
            </DetailsWrapper >
            {
                recoData !== undefined ?
                    <SectionWrapper>
                        <Section movieData={recoLoding === false ? recoData : ''} title={"Recommend"} />
                    </SectionWrapper>
                    : null
            }
            <Footer />
        </>
    );
}

export default Detail;