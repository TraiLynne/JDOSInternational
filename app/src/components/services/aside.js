import React from 'react';

import { SubLinks } from './sub-links';
import { OfficeInfo } from './office-info';
import { Map } from './map';

export const Aside = () => {
    return (
        <aside>
            <SubLinks/>
            <OfficeInfo/>
            <Map/>
        </aside>
    )
}