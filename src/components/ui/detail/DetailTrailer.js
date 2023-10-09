import { styled } from "styled-components";
import 'swiper/css';
import YouTube from 'react-youtube';

const DetailTrailerWrapper = styled.div`
    height: 500px;
    margin-bottom: 50px;

    & > div{
        height: 500px;
    }

    @media (max-width: 767px) { 
        height: 200px;

        & > div{
            height: 200px;
        }

    }
`;

const NoTrailer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & p {
        font-size: 40px;
        color: #D1D1D1;
    }
`;

function DetailTrailer(props) {
    const trailer = props.trailer;
    return (
        <DetailTrailerWrapper>
            {
                props.trailer !== undefined ?
                    <YouTube
                        videoId={trailer.key}
                        opts={{
                            width: "100%",
                            height: "100%",
                            playerVars: {
                                autoplay: 1,
                                rel: 0,
                                modestbranding: 1,
                            },
                        }}
                    />
                    : <NoTrailer><p>No Trailer :(</p></NoTrailer>
            }
        </DetailTrailerWrapper>
    );
}

export default DetailTrailer;