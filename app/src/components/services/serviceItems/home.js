import React from 'react';
import { Link } from 'react-router-dom';


export const Home = () => {
    return (
        <div>
            <div>
                <h2>Construction Management</h2>
                <Link to='/services/construction-management'>
                    <img src='#' alt='Construction Management'/>
                </Link>
            </div>

            <div>
                <h2>Engineering Support Services</h2>
                <Link to='/services/engineering-support'>
                    <img src='#' alt='Engineering Support Services'/>
                </Link>
            </div>

            <div>
                <h2>Facilities Maintenance and Management</h2>
                <Link to='/services/facilities-maintenance'>
                    <img src='#' alt='Facilities Maintenance and Management'/>
                </Link>
            </div>

            <div>
                <h2>Program and Project Management</h2>
                <Link to='/services/program-project'>
                    <img src='#' alt='Program and Project Management'/>
                </Link>
            </div>
        </div>
    )
}