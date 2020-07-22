import React, { Component } from 'react';

import { Map } from './map';
import { Form } from './form';
import { Aside } from './aside';

export default class Contact extends Component {
    render(){
        return (
            <div>
                <Map/>
                <Form/>
                <Aside/>
            </div>
        )
    }
}