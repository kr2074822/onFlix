import { styled } from "styled-components";

const FooterIconWrapper = styled.div`
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
        display: block;
        width: 50px;
        height: 50px;
        font-size: 20px;
        font-weight: 300;
        color: #d1d1d1;
        background-repeat: no-repeat;
        background-position: center;
    }
    & a span {
        display: none;
    }
`;


function FooterIcon(props) {
    const data = props.data;

    return (
        <FooterIconWrapper>
            <ul>
                {
                    data.map((v, i) => {
                        return (
                            <li key={i}>
                                <a href="#none" style={{ backgroundImage: 'url(/images/' + v + '.svg)' }}><span>{v}</span></a>
                            </li>
                        )
                    })
                }
            </ul>
        </FooterIconWrapper>
    )
}

export default FooterIcon;