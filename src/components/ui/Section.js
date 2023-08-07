import { styled } from "styled-components";
import 'swiper/css';
import "swiper/css/free-mode";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from "./SectionTitle";
import { Autoplay } from "swiper/modules";

const SectionWrapper = styled.div`
    &:not(:last-child){
        margin-bottom: 50px;
    }
`;

const MovieImg = styled.img`
    width: 300px;
`;

function Section(props) {
    return (
        <SectionWrapper>
            <SectionTitle title={props.title} />

            <Swiper spaceBetween={0} slidesPerView={5} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} modules={[Autoplay]}>
                {
                    props.movieData !== undefined ?
                        (props.movieData).map((v, i) => {
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
