import React from 'react';
import { logos } from '../../data'

import { Logo } from './logo';
import {
    LogoSection,
    LogoContainer,
    Header
} from '../../styles/customerPartner'

export const CustomerPartnerArea = () => {
    return (
        <LogoSection>
            <Header>Customers & Partners</Header>
            <LogoContainer>
            {
                logos.map(i => <Logo info={i}/>)
            }
            </LogoContainer>
        </LogoSection>
    )
}