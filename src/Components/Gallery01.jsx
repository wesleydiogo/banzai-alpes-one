import React from 'react';

import img02 from '../images/juntosi.png';
import img03 from '../images/Retângulo 16.png';
import img04 from '../images/Retângulo 19.png';
import img05 from '../images/Retângulo 21.png';

function Gallery01() {
    return (
        <div id="gallery01">

            <div className="title">
                A EMOÇÃO DE DIRIGIR LEVA VOCÊ MAIS LONGE
            </div>

            <div className="gallery01-imgs">

                <div className="thumbnails">
                    <div className="border thumbnail">
                        <img className="align-middle" src={img03}></img>
                    </div>
                    <div className="border thumbnail">
                        <img className="align-middle" src={img04}></img>
                    </div>
                    <div className="border thumbnail">
                        <img className="align-middle" src={img05}></img>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col">
                        <img className="img-main w-100" src={img02}></img>
                    </div>
                </div>

            </div>

            <div className="description" id="">
                O novo Civic Geração 10 traz um design único mudando a categoria
                de sedãs para sempre. Ele garante a melhor dirigibilidade com o
                máximo em sofisticação e conforto, atribuído por seu design interno
                e diferenciada ergonomia.
            </div>
        </div>
    );
}

export default Gallery01;