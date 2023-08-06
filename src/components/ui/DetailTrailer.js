import { styled } from "styled-components";
import 'swiper/css';
import YouTube from 'react-youtube';

const DetailTrailerWrapper = styled.div`
    & > div{
        height: 400px;
    }
    margin-bottom: 50px;
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
                    ></YouTube>
                    : null
            }
        </DetailTrailerWrapper>
    );
}

export default DetailTrailer;