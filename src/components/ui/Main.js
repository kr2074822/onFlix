import { styled } from "styled-components";
import Section from "./Section";

const MainWrapper = styled.div`
    padding: 0 20px;
`;

function Main(props) {

    return (
        <MainWrapper>
            {
                Object.keys(props.movieData).map((v, i) => {
                    return (
                        <Section movieData={props.movieData[v]} key={i} title={v}></Section>
                    )
                })
            }
        </MainWrapper>

    );
}


export default Main;
