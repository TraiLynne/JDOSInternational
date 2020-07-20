import React from 'react';
import { Route } from 'react-router-dom';

import { Home } from './serviceItems/home';
import { Construction } from './serviceItems/construction';
import { Engineering } from './serviceItems/engineering';
import { Facilities } from './serviceItems/facilities';

export const MainArea = () => {
    return (
        <section>
                <Route
                    exact
                    path='/services'
                    component={Home}
                />
                <Route
                    path='/services/construction-management'
                    component={Construction}
                />

                <Route
                    path='/services/engineering-support'
                    component={Engineering}
                />

                <Route
                    path='/services/facilities-maintenance'
                    component={ Facilities }
                />
        </section>
    )
}