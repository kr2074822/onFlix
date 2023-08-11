import { styled } from "styled-components";
import FooterInfo from "./FooterInfo";
import FooterIcon from "./FooterIcon";

const FooterWrapper = styled.div`
    width: 100%;
    padding: 100px 0 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Copyright = styled.div`
    margin-top: 40px;

    & p {
        font-size: 14px;
        color: #D1D1D1;
    }
`;

function Footer() {
    const footerIcon = ['icon-facebook', 'icon-instagram', 'icon-twitter', 'icon-youtube'];
    const footerInfo = ['Info', 'Support', 'Marketing'];
    const footerPolicy = ['Terms of Use', 'Privacy Policy']

    return (
        <FooterWrapper>
            <FooterIcon data={footerIcon} />
            <FooterInfo data={footerInfo} />
            <FooterInfo data={footerPolicy} />
            <Copyright>
                <p>© 2019 OnFlix, some rights reserved.</p>
            </Copyright>
        </FooterWrapper>
    )
}

export default Footer;