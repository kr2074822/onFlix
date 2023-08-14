import './App.css';
import { styled } from "styled-components";
import Header from './components/ui/Header';
import 'swiper/css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import Main from './components/ui/Main';
import Detail from './components/ui/Detail';
import Footer from './components/ui/Footer';


const Container = styled.div`
    background: #000000;
`;

function App() {
    const api_key = 'e81185a43efae1fa764c99b459ac3548';
    const URL = 'https://api.themoviedb.org/3/movie/';
    const TV_URL = 'https://api.themoviedb.org/3/tv/';

    const [movieData, setMovieData] = useState([]);
    const [tvData, setTvData] = useState([]);
    const [totalData, setTotalData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {
        const temp = {};

        Object.keys(totalData).map((item, i) => {
            const tempArr = [];
            totalData[item].filter((v, i) => {
                if ((v.hasOwnProperty('title') || v.hasOwnProperty('name')) && ((v.title ? (v.title.toLowerCase()).includes(search.toLowerCase()) : (v.name.toLowerCase()).includes(search.toLowerCase()) ))) {
                    tempArr.push(v);
                    temp[item] = tempArr;
                }
            })
        });

        setSearchData(temp)
    }, [search])

    
    useEffect(() => {
        setTotalData({ ...movieData, ...tvData });
    }, [movieData, tvData]);

    useEffect(() => {
        fetchData();
        tvFetchData();

        setTotalData({ ...movieData, ...tvData });
    }, []);

    
    const searchResetHandler = function (e) {
        setSearch('');
    }
    const searchHandler = function (e) {
        setSearch(e.target.value);
    }


    async function fetchData() {
        const popRes = await fetch(URL + 'popular?api_key=' + api_key);
        const popResult = await popRes.json();

        const nowRes = await fetch(URL + 'now_playing?api_key=' + api_key);
        const nowResult = await nowRes.json();

        const topRes = await fetch(URL + 'top_rated?api_key=' + api_key);
        const topResult = await topRes.json();

        const upcomRes = await fetch(URL + 'upcoming?api_key=' + api_key);
        const upcomResult = await upcomRes.json();

        setMovieData({
            'Movie Popular': popResult.results,
            'Movie Now Play': nowResult.results,
            'Top Rated': topResult.results,
            'Upcoming': upcomResult.results,
        });
    }


    async function tvFetchData() {
        const popRes = await fetch(TV_URL + 'popular?api_key=' + api_key);
        const popResult = await popRes.json();

        const airingTodayRes = await fetch(TV_URL + 'airing_today?api_key=' + api_key);
        const airingTodayResult = await airingTodayRes.json();

        const topRes = await fetch(TV_URL + 'top_rated?api_key=' + api_key);
        const topResult = await topRes.json();

        const onTheAir = await fetch(TV_URL + 'on_the_air?api_key=' + api_key);
        const onTheAirResult = await onTheAir.json();

        setTvData({
            'Tv Popular': popResult.results,
            'Airing Today': airingTodayResult.results,
            'Tv Top Rated': topResult.results,
            'On The Air': onTheAirResult.results,
        });

    }



    return (
        <Container className="App">
            <Header searchHandler={searchHandler} searchResetHandler={searchResetHandler} search={search} />
            <Routes>
                <Route path="/" element={<Main search={search} movieData={search.length !== 0 ? searchData : totalData} />} />
                <Route path="/detail/:id" element={<Detail data={movieData} />} />
            </Routes>
            <Footer />
        </Container>
    );
}

export default App;
