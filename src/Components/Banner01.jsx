import React from 'react';

import img01 from '../images/Retângulo 1.png';
import img02 from '../images/Civic_EXL_2017_3_4_Lado_A_Preto_72dpi.png';
import img03 from '../images/Grupo 98.svg'

function Banner01() {
    return (
        <div id="banner01">

            <div id="banner01-web">
                <img className="w-100" src={img01}></img>
            </div>

            <div className="container" id="banner01-mobile">
                <div className="row">
                    <img className="w-100" src={img02} alt="" />
                </div>
                <div className="row">
                    <img className="w-100" src={img03} alt="" />
                </div>
            </div>

        </div>
    );
}

export default Banner01;