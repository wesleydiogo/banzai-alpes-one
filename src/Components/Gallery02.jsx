import React from 'react';
import img01 from '../images/Grupo 74.2.png';
import img02 from '../images/Retângulo 11.png';
import Card from './Card';

import img04 from '../images/07-DIRECAO_ELETRICA.png';
import img05 from '../images/08-VIDROS_ELETRICOS.png';
import img06 from '../images/01-CAMBIO_AUTOMATICO.png';

import $ from 'jquery';
import '../js/lightslider';
import '../css/lightslider.css';

function Gallery02() {
  $(document).ready(() => {
    var tam = $(window).width();

    if (tam <= 719) {
      $('#autoWidth').lightSlider({
        adaptiveHeight: true,
        item: 1,
        slideMargin: 0,
        loop: true
      });
    } else if (tam >= 720) {
      $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
          $('#autoWidth').removeClass('cS-hidden');
        }
      });
    }
  });

  return (
    <div>
      <div className="" id="banner02-web">
        <img className="w-100" src={img01} alt="" />

        <div id="gallery02">

          <ul id="content-slider" className="cs-hidden group-cards01">
            <li className="item-a">
              <Card
                id=""
                img={img04}
                titleCard="Direção com Assistência"
                description="
                Sistema de estabilidade reforça automaticamente o retorno da direção, 
                auxiliando o motorista em situações onde o carro está ameaçado de instabilidade."
              />
            </li>
            <li className="item-b">
              <Card
                id=""
                img={img05}
                titleCard="Vidros elétricos com subida"
                description="
                  Todas as portas possuem vidros elétricos com a função um toque e sistema 
                  de segurança antiesmagamento."
              />
            </li>
            <li className="item-c">
              <Card
                id=""
                img={img06}
                titleCard="Câmbio CVT com Paddle Shift"
                description="
                  O câmbio com transmissão CVT de 7 velocidades com Paddle Shift (aletas)
                  proporciona conforto ao trocar de marchas."
              />
            </li>
          </ul>
        </div>

      </div>

      <div id="banner02-mobile">
        <img className="w-100" src={img02} alt="" />

        <div className="information">
          <div className="title">
            PREPARE-SE PARA ALGO REALMENTE NOVO
          </div>
          <div className="description">
            O Novo Civic Geração 10 vem completo de série. Conheça a versão perfeita para você.
          </div>
        </div>

      </div>
    </div>
  );
}

export default Gallery02;