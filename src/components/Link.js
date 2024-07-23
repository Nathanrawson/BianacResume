import React from 'react';

const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        if (href.startsWith('https')) {
            // Allow the default behavior to occur for external links (open in a new tab)
            return;
        }

        // Prevent default for internal links and handle navigation
        event.preventDefault();
        window.history.pushState({}, '', href);
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
        <a onClick={onClick} className={className} href={href} target={href.startsWith('https') ? '_blank' : '_self'}>
            {children}
        </a>
    );
};

export default Link;
