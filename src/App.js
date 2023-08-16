import './App.css';
import { styled } from "styled-components";
import 'swiper/css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import Main from './components/ui/main/Main';
import Detail from './components/ui/detail/Detail';
import OnflixLogin from './components/ui/login/OnflixLogin';
import OnflixSignUp from './components/ui/signUp/OnflixSignUp';
import { useDispatch, useSelector } from 'react-redux';
import { resizeHandler } from './store/store';

const Container = styled.div`
    background: #000000;
    min-height: 100vh;
`;

function App() {
    const api_key = 'e81185a43efae1fa764c99b459ac3548';
    const URL = 'https://api.themoviedb.org/3/movie/';
    const TV_URL = 'https://api.themoviedb.org/3/tv/';

    // similar
    // https://api.themoviedb.org/3/movie/569094/similar?api_key=e81185a43efae1fa764c99b459ac3548

    const [movieData, setMovieData] = useState([]);
    const [tvData, setTvData] = useState([]);
    const [totalData, setTotalData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const search = useSelector((state) => state.search.value);
    const dispatch = useDispatch();
    const menuType = useSelector((state) => state.menuType);

    window.addEventListener('resize', function () {
        let temp = {
            width: window.innerWidth,
        }
        dispatch(resizeHandler(temp))
    })

    useEffect(() => {
        let data; 
        if (menuType.value === 'all') {
            data = totalData;
        } else if (menuType.value === 'movie') {
            data = movieData;
        } else {
            data = tvData;
        }


        const temp = {};
        Object.keys(data).map((item, i) => {
            const tempArr = [];
            data[item].filter((v, i) => {
                if ((v.hasOwnProperty('title') || v.hasOwnProperty('name')) && ((v.title ? (v.title.toLowerCase()).includes(search.toLowerCase()) : (v.name.toLowerCase()).includes(search.toLowerCase())))) {
                    tempArr.push(v);
                    temp[item] = tempArr;
                }
                return null;

            });

            return null;
        });

        setSearchData(temp);
    }, [search, totalData, tvData, movieData, menuType])

    useEffect(() => {
        setTotalData({ ...movieData, ...tvData });
    }, [movieData, tvData]);

    useEffect(() => {
        fetchData();
        tvFetchData();
    }, []);

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
            <Routes>
                {/* <Route path="/" element={<Main searchHandler={searchHandler} searchResetHandler={searchResetHandler} search={search} movieData={search.length !== 0 ? searchData : totalData} />} /> */}
                <Route path="/" element={<Main search={search} movieData={search.length !== 0 ? searchData : totalData}  />} />
                <Route path="/detail/:id" element={<Detail data={movieData} />} />
                <Route path="/login" element={<OnflixLogin />} />
                <Route path="/join" element={<OnflixSignUp />} />
                <Route path="/movie" element={<Main search={search} movieData={search.length !== 0 ? searchData : movieData} />} />
                <Route path="/tvshow" element={<Main search={search} movieData={search.length !== 0 ? searchData : tvData} />} />
            </Routes>
        </Container>
    );
}

export default App;
