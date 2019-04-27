import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className='card-container'>
            {props.characters.map((item) => (
                <img className='card-image' src={item.image} alt="" key={item.key} onClick={() => {props.onClick(item.key)}} ></img>
            ))}
        </div>
    )
}

export default Card;