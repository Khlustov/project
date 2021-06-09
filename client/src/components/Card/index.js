import React from 'react';

import './style.css';

const Card = ({title, price, description, contacts}) => {


    return (
        <div className="card">
            <h3 className="card-title">{title}</h3>
            <h4 className="card-price">{price} BYN</h4>
            <p className="card-description">Описание: {description}</p>
            <p className="card-contacts">Контакты: {contacts}</p>
        </div>
    )    
}
  
export {Card}