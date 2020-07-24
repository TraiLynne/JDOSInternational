import styled from 'styled-components';

import {
    fontFamily
} from './'

import {
    CTABackground
} from '../assets'

export const CTAContainer = styled.section`
    background-color: #0a2a45;
    ${fontFamily}
    display: flex;
    padding: 50px 25px;
    background-image: url(${CTABackground});
    background-position: center;
    align-items: center;
    justify-content: space-between;
`

export const CTAText = styled.p`
    font-size: 1.5em;
    width: 75%;
    color: #ebebeb;
`

export const CTA = styled.button`
    border-radius: 5px;
    font-size: 20px;
    border-color: #ebebeb;
    color: #ebebeb;
    background-color: transparent;
    width: 100%;
`

export const ServiceContainer = styled.section`
    text-align: center;
    padding: 50px 0;
`

export const Header = styled.h2`
    text-transform: uppercase;
`

export const ServiceText = styled.p`
    color: #b0b0b0
`

export const ServiceLinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    padding: 50px;
    margin: 0 auto;
    flex-direction: column;

    @media(min-width: 500px){
        flex-direction: row;
        width: 75%;
        flex-wrap: wrap;
        height: 100vh;
    }
`

export const ServiceLinkImage = styled.img `
    width: 300px;
    height: 225px;
    border: none;

    &:hover {
        filter: brightness(50%)
    }
`