import styled from 'styled-components';

function Footer() {
    return(
        <FooterWarpper>
            <p>copy Right &#169; YasserA. Gamal</p>
        </FooterWarpper>
    )
}

export default Footer;

const FooterWarpper = styled.div`
    width : 100%;
    position : fixed;
    bottom : 0;
    background-color : var(--mainBlue);
    height: 2.5rem;
    text-align: center;
    line-height: 2.5rem;
    color : var(--mainWhite);
`;
