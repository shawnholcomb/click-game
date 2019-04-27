import React from 'react';
import './Nav.css';

function Nav(props) {
    return (
        <nav className='navbar'>
            <a className='navbar-text' href='/'>Clicky Game</a>
            <span className='message navbar-text'>Click an image to begin!</span>
            <span className='navbar-text' score={ props.score } topscore={ props.topscore }>
                <p className='my-auto'>Score: { props.score } | Top Score: { props.topscore }</p>
            </span>
        </nav>
    )
}

export default Nav;