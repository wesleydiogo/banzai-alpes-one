import React from 'react';

import locate from '../icons/facebook-placeholder-for-locate-places-on-maps.svg';

function Contato() {
    return (
        <div className="w-100" id="contato-footer">
            <div className="row boxes">
                <div className="box rounded">
                    <img className="icon" src={locate} alt="" />
                    <div className="text">Encontre uma<br />
                        <span className="red02">CONCESSIONÁRIA</span>
                    </div>
                </div>
                <div className="box rounded">
                    <div>
                        CENTRAL DE ATENDIMENTO<br />
                        <span className="red03">(31) 3123-1234</span>
                    </div>
                </div>
            </div>

            <div className="row">
                <div id="siga-banzai" className="col">
                    SIGA A BANZAI NAS REDES SOCIAIS
                </div>
            </div>
        </div>
    );
}

export default Contato;