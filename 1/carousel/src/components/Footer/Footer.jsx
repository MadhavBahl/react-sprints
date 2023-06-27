import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            Visit &nbsp;
            <a
                className='footer-link'
                href='https://youtube.com/@TheLeanProgrammer?sub_confirmation=1'
            >
                https://youtube.com/@TheLeanProgrammer
            </a>
            &nbsp; for more awesome content!
        </div>
    );
};

export default Footer;
