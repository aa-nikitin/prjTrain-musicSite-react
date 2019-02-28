import React from 'react';
import { withData } from '../../context/';

const ForSocials = ({ socials }) => {
    return (
        <ul className="social">
            {socials.map(item => (
                <li key={item.icon} className="social__item">
                    <a className="social__link" href={item.link}>
                        <i className={`fa fa-${item.icon}`} />
                    </a>
                </li>
            ))}
        </ul>
    );
};

const Socials = withData(ForSocials);

export { Socials };
