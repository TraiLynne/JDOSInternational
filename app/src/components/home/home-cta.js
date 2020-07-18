import React from 'react';
import {
    Link
} from 'react-router-dom';

export const CallToAction = () => {
    return (
        <div>
            <p>Founded in 1995, J-Dos Internationalé has a proven track record of providing excellent strategic project management services at the Federal, State and Local levels.</p>

            <Link to='/contact'>
                <button>
                    Contact Us
                </button>
            </Link>
        </div>
    )
}