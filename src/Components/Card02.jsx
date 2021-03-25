import React from 'react';

// import { Container } from './styles';

function Card02(props) {
    const id = props.id
    const img = props.img
    const description = props.description

    return (
        <div className="card02 border" id={id}>

            <div className="row">
                <div className="col">
                    <img src={img} alt="" />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="description">
                        {description}
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <button className="container-fluid border btn btn-light" type="button" >
                        CONHEÇA MAIS
                    </button>
                </div>
            </div>
            
        </div>
    );
}

export default Card02;