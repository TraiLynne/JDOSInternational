import React from 'react';
import {
    logos
} from '../../data/customers_partners';

import {
    LogoImg,
    Header
} from '../../styles/customerPartner'

export const Logo = (prop) => {
    return (
        <LogoImg src={prop.info.logo} alt={prop.info.name}/>
    )
}