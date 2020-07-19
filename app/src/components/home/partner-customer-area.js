import React from 'react';
import { logos } from '../../data'

import { Logo } from './logo';

export const CustomerPartnerArea = () => {
    return (
        <section>
            <h2>Customers & Partners</h2>
            {
                logos.map(i => <Logo info={i}/>)
            }
        </section>
    )
}