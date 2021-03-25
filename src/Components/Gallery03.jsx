import React from 'react';
import Card02 from './Card02';

import img01 from '../images/accord.png';
import img02 from '../images/city.png';
import img03 from '../images/fit_2018.png';


import $ from 'jquery';
import '../js/lightslider';
import '../css/lightslider.css';

function Gallery03() {
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
        <div id="gallery03">
            <div>
                <div className="title">
                    PRONTO PARA TER UM HONDA?
                </div>
                <div className="description">
                    Conheça os últimos grandes lançamentos da honda.
                </div>
            </div>

            <ul id="autoWidth" className="cs-hidden group-cards02">
                <li className="item-a">
                    <Card02
                        id=""
                        img={img01}
                        description="
                                Novo Honda Accord: a combinação perfeita de três atributos 
                                exigidos pelo consumidor: elegância, luxo e alto desempenho."
                    />
                </li>
                <li className="item-b">
                    <Card02
                        id=""
                        img={img02}
                        description="
                                O City está muito mais moderno e esportivo. Com design único e 
                                mais tecnológico do que nunca, ele vai conquistar todos os olhares."
                    />
                </li>
                <li className="item-c">
                    <Card02
                        id=""
                        img={img03}
                        description="
                                Com seu design inconfundível, o novo Honda Fit traz novidades 
                                que vão surpreender a todos e atrair ainda mais fãs."
                    />
                </li>
            </ul>

        </div>
    );
}

export default Gallery03;