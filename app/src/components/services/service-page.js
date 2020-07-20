import React, { Component } from 'react';

// Component
import { Aside } from './aside';
import { MainArea } from './main-area';

export default class Services extends Component {
    render () {
        return (
            <div>
                <h1>Services</h1>
                <Aside/>
                <MainArea/>
            </div>
        )
    }
}