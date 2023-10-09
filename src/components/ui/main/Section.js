import { styled } from "styled-components";
import 'swiper/css';
import "swiper/css/free-mode";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from "./SectionTitle";
import { Autoplay } from "swiper/modules";
import { useSelector } from "react-redux";

const SectionWrapper = styled.div`
    display: ${props => props.check};
    &:not(:last-child){
        margin-bottom: 50px;
    }
`;

const MovieImg = styled.img`
    width: 100%;
`;

function Section(props) {
    const resize = useSelector((state) => state.resize);
    const sliderHandler = () => {
        if (resize.width > 1024) {
            return 5
        } else if (resize.width > 767) {
            return 3
        } else {
            return 2
        }
    }


    return (
        <SectionWrapper check={props.movieData !== undefined ? '' : 'none'}>
            <SectionTitle title={props.title} />
            <Swiper spaceBetween={20} slidesPerView={sliderHandler()} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} modules={[Autoplay]}>
                {
                    props.movieData.status === 'success' ?
                        (props.movieData.data.results).map((v, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <Link to={"/detail/" + v.id} state={v} className="i" >
                                        <MovieImg src={'https://image.tmdb.org/t/p/w500' + v.poster_path} />
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                        : null
                }
            </Swiper>

        </SectionWrapper>
    );
}

export default Section;
