import React from 'react';

import logo from '../images/logo.png';
import '../css/bootstrap.min.css';

function LogoAndContact() {
    return (
        <div id="logo-and-contact">
            <img id="logo" src={logo} />
            <div id="contact">
                <span id="contact-name">CENTRAL DE ATENDIMENTO</span>
                <br /><span id="contact-tel">(31) 3132-1234</span>
            </div>
        </div>
    );
}

export default LogoAndContact;