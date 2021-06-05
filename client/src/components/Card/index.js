import React from 'react';

import './style.css';

const Card = ({id, title, price, description, contacts}) => {


    return (
        <div>
            <span hidden>{id}</span>
            <h3>{title}</h3>
            <h4>{price}</h4>
            <p>{description}</p>
            <p>{contacts}</p>
        </div>
    )    
}
  
export {Card}