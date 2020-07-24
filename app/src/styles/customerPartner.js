import styled from 'styled-components';

export const LogoSection = styled.section`
    text-align: center;
    margin: 0 auto;
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 auto;

    @media(min-width:500px){
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-around;
    }
`
export const Header = styled.h2`
text-transform: uppercase;
`

export const LogoImg = styled.img`
    width: 100%;

    @media(min-width: 500px){
        width: 22%;
    }
`