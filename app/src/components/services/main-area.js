import React from 'react';
import { Route } from 'react-router-dom';

import { Home } from './serviceItems/home';

export const MainArea = () => {
    return (
        <section>
            <h1>Our Services</h1>
            <p>J-Dos tailors it’s services to meet the needs of each client group to ensure consistent, superior services at the local level. For more than 22 years, J-Dos has provided complete civil infrastructure and facilities management, as well as other engineering support services for both public and private clients.</p>
            <div>
                <Route
                    exact
                    path='/services'
                    component={Home}
                />
                
            </div>
        </section>
    )
}