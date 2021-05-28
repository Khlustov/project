import React, { useCallback } from 'react';

import './style.css';

const Card = ({title, price, description, contacts}) => {


    return (
        <div>
            <h3>{title}</h3>
            <h4>{price}</h4>
            <p>{description}</p>
            <p>{contacts}</p>
        </div>
    )    
}
  
export {Card}