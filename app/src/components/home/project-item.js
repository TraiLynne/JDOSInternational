import React from 'react';
import { Link } from 'react-router-dom';

export const FeaturedProject = (props) => {
    return (
        <Link to={`/projects/${props.project.id}`}>
            <h3>{props.project.name}</h3>
        </Link>
    )
}