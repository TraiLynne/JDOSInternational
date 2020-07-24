import styled from 'styled-components';

import {
    ctaFont
} from './'

import {
    CTABackground
} from '../assets'

export const CTAContainer = styled.section`
    background-color: #0a2a45;
    ${ctaFont}
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