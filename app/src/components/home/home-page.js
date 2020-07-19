import React, { Component } from 'react';

// Components
import { HomeHero } from './hero-area';
import { CallToAction } from './home-cta';
import { HomeServiceArea } from './services';
import { HomeProjectArea } from './projects';
import { CustomerPartnerArea } from './partner-customer-area';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <HomeHero/>
                <CallToAction/>
                <HomeServiceArea/>
                <HomeProjectArea/>
                <CustomerPartnerArea/>
            </div>
        );
    }
};