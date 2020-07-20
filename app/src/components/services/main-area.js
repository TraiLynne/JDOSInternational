import React from 'react';
import { Route } from 'react-router-dom';

import { Home } from './serviceItems/home';
import { Construction } from './serviceItems/construction';

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
        </section>
    )
}