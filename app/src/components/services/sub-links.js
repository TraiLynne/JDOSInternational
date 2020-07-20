import React from 'react';
import { Link } from 'react-router-dom';

export const SubLinks = () => {
    return (
        <div>
            <Link to='/services/construction-management'>Construction Management</Link>
            <Link to='/services/engineering-support'>Engineering Admin Support Services</Link>
            <Link to='/services/facilities-maintenance'>Facilities Maintenance & Management</Link>
            <Link to='/services/program-project'>Program & Project Management</Link>
        </div>
    )
}