import { styled } from "styled-components";
import NoResult from "../detail/NoResult";
import Section from "./Section";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const MainWrapper = styled.div`
    min-height: 100vh;
    padding: 0 20px;
`;

function Main(props) {

    return (
        <>
            <Header />
            <MainWrapper>
                {
                    Object.keys(props.movieData).length !== 0 ?
                        Object.keys(props.movieData).map((v, i) => {
                            return (
                                <Section movieData={props.movieData[v]} key={i} title={v} />
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
