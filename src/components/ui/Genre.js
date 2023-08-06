import { styled } from "styled-components";
import 'swiper/css';

const GenreWrapper = styled.ul`
    display: flex;
    justify-content: left;
    align-items: flex-start;
    margin-bottom: 20px;

    & li {
        color: #D1D1D1;
    }
    &>li:not(:last-child) {
        margin-right: 10px;
    }
`;

function Genre(props) {
    const genres = props.genres;
    return (

        <GenreWrapper>
            {
                genres !== undefined ?
                    genres.map((v, i) => {
                        return (
                            <li key={i}>{v}</li>
                        )
                    })
                    : null
            }
        </GenreWrapper>
    );
}

export default Genre;