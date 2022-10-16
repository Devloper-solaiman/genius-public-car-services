import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer>
            <p>genius car <small>&#169;</small> services {year}</p>
        </footer>
    );
};

export default Footer;