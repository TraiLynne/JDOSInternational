import React from 'react';
import { Link } from 'react-router-dom';

export const HomeServiceArea = () => {
    return (
        <section>
            <h2>Our Services</h2>
            <p>Comprehensive engineering and management support services, providing clients with the highest level of quality service for each project, on time and within budget.</p>
            
            <div>
                <Link to='/services/construction-management'>
                    <img src='#' alt='Construction Management'/>
                </Link>
                <Link to='/services/facilities-maintenance-management/'>
                    <img src='#' alt='Facilities Maintenance & Management'/>
                </Link>
                <Link to='/services/program-project-management'>
                    <img src='#' alt='Program & Project Management'/>
                </Link>
                <Link to='/services/engineering-support-services'>
                    <img src='#' alt='Engineering Admin Support Services'/>
                </Link>
            </div>
        </section>
    )
}