import React from 'react';
import {
    logos
} from '../../data/customers_partners';

export const Logos = () => {
    return (
        logos.map(l => <img src={l.logo} alt={l.name}/>)
    )
}