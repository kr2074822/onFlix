import { styled } from "styled-components";
import Section from "./Section";
import NoResult from "./NoResult";

const MainWrapper = styled.div`
    min-height: 100vh;
    padding: 0 20px;
`;

function Main(props) {

    return (
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
    );
}


export default Main;
