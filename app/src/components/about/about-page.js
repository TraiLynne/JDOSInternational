import React, { Component } from 'react';

// Components
import { AboutHero } from './hero-area';
import { Main } from './main-area';
import { Aside } from './aside';



export default class About extends Component {
    render() {
        return (
            <div>
                <h1>About Us Page</h1>
                <AboutHero/>
                <Main/>
                <Aside/>
            </div>
        );
    }
};