import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className='card-container'>
            {props.characters.map((item) => (
                <img className='card-image' src={item.image} alt="" data-id={item.key} key={item.key} onClick={props.onClick}></img>
            ))}
        </div>
    )
}

export default Card;