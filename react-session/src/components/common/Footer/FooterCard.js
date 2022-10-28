import React from 'react';

import './FooterCard.css';
const FooterCard = (props) => {
    return (
        <div className='footer-card'>
            <h3 className='footer-title'>
                {props.title}
            </h3>
            <div className='footer-body'>
                {props.children}
            </div>
        </div>
    );
}

export default FooterCard;