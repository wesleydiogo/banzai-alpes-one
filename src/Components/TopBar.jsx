import React from 'react';
import homeIcon from '../icons/home-button.svg';
import envelopeIcon from '../icons/black-envelope.svg';
import locateIcon from '../icons/facebook-placeholder-for-locate-places-on-maps.svg';


function TopBar() {
    return (
        <div id="top-bar">

            <div className="link-top-bar" id="link-top-bar-01">
                <img className="icon align-middle" src={homeIcon} alt="" />
                <a className="link-name align-middle" href="#">Ir para o Portal Banzai</a>
            </div>

            <div className="link-top-bar" id="link-top-bar-02">
                <img className="icon align-middle" src={locateIcon} alt="" />
                <a className="link-name align-middle" href="#">Encontre uma concessionária</a>
            </div>

            <div className="link-top-bar" id="link-top-bar-03">
                <img className="icon align-middle" src={envelopeIcon} alt="" />
                <a className="link-name align-middle" href="#">Fale Conosco</a>
            </div>

        </div>
    )
}

export default TopBar;