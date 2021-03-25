import React from 'react';

function Card(props) {
    const id = props.id
    const img = props.img
    const titleCard = props.titleCard
    const description = props.description

    return (
        <div className="card01" id={id}>

            <div className="row">
                <div className="col">
                    <div className="border">
                        <img className="align-middle" src={img} alt="" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="titleCard">
                        {titleCard}
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="description">
                        {description}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Card;