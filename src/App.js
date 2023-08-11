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

    const [movieData, setMovieData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [search, setSearch] = useState('');


    const searchHandler = function (e) {
        setSearch(e.target.value);
    }

    useEffect(() => {
        const temp = {};

        Object.keys(movieData).map((item, i) => {
            const tempArr = [];
            movieData[item].filter((v, i) => {
                if (v.hasOwnProperty('title') && (v.title.toLowerCase()).includes(search.toLowerCase())) {
                    tempArr.push(v);
                    temp[item] = tempArr;
                }
            })
        });
        setSearchData(temp)

    }, [search])



    const searchResetHandler = function (e) {
        setSearch('');
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
            'Popular': popResult.results,
            'Now Play': nowResult.results,
            'Top Rated': topResult.results,
            'Upcoming': upcomResult.results,
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Container className="App">
            <Header searchHandler={searchHandler} searchResetHandler={searchResetHandler} search={search} />
            {
                search.length !== 0 ?
                    <Routes>
                        <Route path="/" element={<Main movieData={searchData} />}></Route>
                        <Route path="/detail/:id" element={<Detail data={movieData}></Detail>}></Route>
                    </Routes>
                    :
                    <Routes>
                        <Route path="/" element={<Main movieData={movieData} />}></Route>
                        <Route path="/detail/:id" element={<Detail data={movieData}></Detail>}></Route>
                    </Routes>
            }
            <Footer />
        </Container>
    );
}

export default App;
