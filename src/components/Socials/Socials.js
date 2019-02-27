import React from 'react';

const socials = [
    { icon: 'linkedin', link: '#' },
    { icon: 'github-alt', link: '#' },
    { icon: 'tumblr', link: '#' },
    { icon: 'vk', link: '#' }
];

const Socials = () => {
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

export { Socials };
