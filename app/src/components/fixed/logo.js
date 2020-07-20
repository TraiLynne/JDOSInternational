import React from 'react';

export const Logo = props => {
    return (
        <div>
            <img src={props.info.logo} alt={props.info.name}/>
        </div>
    )
}