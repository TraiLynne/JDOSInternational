import React from 'react';
import {
    Link
} from 'react-router-dom';

import {
    CTAContainer,
    CTAText,
    CTA
} from '../../styles/home';

export const CallToAction = () => {
    return (
        <CTAContainer>
            <CTAText>Founded in 1995, J-Dos Internationalé has a proven track record of providing excellent strategic project management services at the Federal, State and Local levels.</CTAText>

            <Link to='/contact'>
                <CTA>
                    Contact Us
                </CTA>
            </Link>
        </CTAContainer>
    )
}