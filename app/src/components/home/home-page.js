import React, { Component } from 'react';

// Components
import HomeHero from './hero-area';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <HomeHero/>
            </div>
        );
    }
}