import React from 'react';
import { Link } from 'react-router-dom';

export const Aside = () => {
    return (
        <div>
            <Link to='/services'>
                <h3>Our Services</h3>
            </Link>

            <Link to='/projects'>
                <h3>Our Projects</h3>
            </Link>
        </div>
    )
}