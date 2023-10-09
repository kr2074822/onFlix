import { styled } from "styled-components";
import NoResult from "../detail/NoResult";
import Section from "./Section";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";

const MainWrapper = styled.div`
    min-height: 100vh;
    padding: 0 20px;
`;

function Main(props) {
    const title = useSelector((state) => state.title.value);

    return (
        <>
            <Header />
            <MainWrapper>
                {
                    Object.keys(props.movieData).length !== 0 ?
                        Object.keys(props.movieData).map((v, i) => {
                            // console.log(props.movieData[v].data.results)
                            return (
                                <Section movieData={props.movieData[v]} key={i} title={title[i]} />
                            )
                        })
                        : <NoResult search={props.search} />
                }
            </MainWrapper>
            <Footer />
        </>
    );
}


export default Main;
