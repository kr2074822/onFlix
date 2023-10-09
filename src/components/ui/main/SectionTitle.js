import { styled } from "styled-components";
import 'swiper/css';

const SectionTitleWrapper = styled.div`
    & span {
        color: #FFFFFF;
        font-size: 24px;
    }
    margin-bottom: 10px;

`

function SectionTitle(props) {
    return (
        <SectionTitleWrapper>
            <span>{props.title}</span>
        </SectionTitleWrapper>
    );
}

export default SectionTitle;
