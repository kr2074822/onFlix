import { styled } from "styled-components";

const FooterInfoWrapper = styled.div`
    margin-bottom: 20px;

    & ul {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

    }

    & ul li {
        padding: 0 10px;
    }

    & a {
        font-size: 20px;
        font-weight: 300;
        color: #d1d1d1;
    }
`;


function FooterInfo(props) {
    const data = props.data;

    return (
        <FooterInfoWrapper>
            <ul>
                {
                    data.map((v, i) => {
                        return (
                            <li key={i}>
                                <a href="#none">{v}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </FooterInfoWrapper>
    )
}

export default FooterInfo;