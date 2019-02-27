import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ children, linkMain }) => {
    const tpl = {
        doter: <span className="title-name__doter">.</span>,
        class: 'header__text title-name'
    };

    return linkMain ? (
        <Link className={tpl.class} to={linkMain}>
            {children}
            {tpl.doter}
        </Link>
    ) : (
        <div className={tpl.class}>
            {children}
            {tpl.doter}
        </div>
    );
};

export { Logo };
