import { styled } from "styled-components";
import Section from "./Section";

const MainWrapper = styled.div`
    padding: 0 20px;
`;


function Main(props) {

    return (

        <MainWrapper>
            <Section movieData={props.movieData.popular} title='Popular'></Section>
            <Section movieData={props.movieData.nowPlay} title='Now Playing'></Section>
            <Section movieData={props.movieData.topRated} title='Top Rated'></Section>
            <Section movieData={props.movieData.upComing} title='Upcoming'></Section>
        </MainWrapper>

    );
}

export default Main;
