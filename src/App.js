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
import { useQueries } from "react-query";

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

    const [searchData, setSearchData] = useState([]);
    const search = useSelector((state) => state.search.value);
    const dispatch = useDispatch();
    const menuType = useSelector((state) => state.menuType);

    const movieData = useQueries([
        {
            queryKey: "mPopular",
            queryFn: () => fetch(URL + 'popular?api_key=' + api_key).then((res) => res.json()),
        },
        {
            queryKey: "mNowPlay",
            queryFn: () => fetch(URL + 'now_playing?api_key=' + api_key).then((res) => res.json()),
        },
        {
            queryKey: "mTopRate",
            queryFn: () => fetch(URL + 'top_rated?api_key=' + api_key).then((res) => res.json()),
        },
        {
            queryKey: "mUpcom",
            queryFn: () => fetch(URL + 'upcoming?api_key=' + api_key).then((res) => res.json()),
        },
    ]);

    const tvData = useQueries([
        {
            queryKey: "tPopular",
            queryFn: () => fetch(TV_URL + 'popular?api_key=' + api_key).then((res) => res.json()),
        },
        {
            queryKey: "tAirToday",
            queryFn: () => fetch(TV_URL + 'airing_today?api_key=' + api_key).then((res) => res.json()),
        },
        {
            queryKey: "tTopRate",
            queryFn: () => fetch(TV_URL + 'top_rated?api_key=' + api_key).then((res) => res.json()),
        },
        {
            queryKey: "tOnAir",
            queryFn: () => fetch(TV_URL + 'on_the_air?api_key=' + api_key).then((res) => res.json()),
        },
    ]);

    window.addEventListener('resize', function () {
        let temp = {
            width: window.innerWidth,
        }
        dispatch(resizeHandler(temp))
    });

    useEffect(() => {
        let data;
        if ((movieData[0].status === 'success' && tvData[0].status === 'success') &&
            (movieData[1].status === 'success' && tvData[1].status === 'success') &&
            (movieData[2].status === 'success' && tvData[2].status === 'success') &&
            (movieData[3].status === 'success' && tvData[3].status === 'success')
        ) {

            if (menuType.value === 'all') {
                data = [...movieData, ...tvData];
            } else if (menuType.value === 'movie') {
                data = movieData;
            } else {
                data = tvData;
            }

            let temp = JSON.parse(JSON.stringify(data));

            temp.map((item, i) => {
                const tempArr = [];
                temp[i].data.results.filter((v, j) => {
                    if ((v.hasOwnProperty('title') || v.hasOwnProperty('name')) && ((v.title ? (v.title.toLowerCase()).includes(search.toLowerCase()) : (v.name.toLowerCase()).includes(search.toLowerCase())))) {
                        tempArr.push(v);
                        temp[i].data.results = [];
                        temp[i].data.results = tempArr;
                    }
                    if (tempArr.length < 1) {
                        temp[i].data.results = [];
                    }
                    return null;

                });
                return null;
            });

            let newTemp = [];
            for (let i = 0; i < temp.length; i++) {
                if (temp[i].data.results.length === 0) {
                    temp[i] = '';
                } else {
                    newTemp.push(temp[i]);
                }
            }

            setSearchData(newTemp);
        }

    }, [search])

    return (
        <Container className="App">
            <Routes>
                <Route path="/" element={<Main search={search} movieData={search.length !== 0 ? searchData : [...movieData, ...tvData]} />} />
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
