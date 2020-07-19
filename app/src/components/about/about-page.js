import React, { Component } from 'react';

// Components
import { AboutHero } from './hero-area';


export default class About extends Component {
    render() {
        return (
            <div>
                <h1>About Us Page</h1>
                <AboutHero/>
            </div>
        );
    }
};