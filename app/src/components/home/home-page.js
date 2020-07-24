import React, { Component } from 'react';

// Components
import { HomeHero } from './hero-area';
import { CallToAction } from './home-cta';
import { HomeServiceArea } from './services';
import { HomeProjectArea } from './projects';
import { CustomerPartnerArea } from '../fixed/partner-customer-area';

export default class Home extends Component {
    render() {
        return (
            <div>
                <HomeHero/>
                <CallToAction/>
                <HomeServiceArea/>
                <HomeProjectArea/>
                <CustomerPartnerArea/>
            </div>
        );
    }
};