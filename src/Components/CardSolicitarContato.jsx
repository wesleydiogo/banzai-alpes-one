import React from 'react';
import phoneIcon from '../icons/phone.svg'

function CardSolicitarContato() {
  return (
    <div className="rounded" id="card-solicitar-contato">

      <div className="header d-flex flex-row align-items-center">
        <div className="icon">
          <img className="align-middle" src={phoneIcon} alt="" />
        </div>
        <div className="title">Solicitar um<br /><span id="contato">CONTATO</span></div>
      </div>

      <div className="form-group">
        <div className="row">
          <div className="col">
            <input className="form-control" type="text" placeholder="Nome" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input className="form-control" type="email" placeholder="E-mail" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input className="form-control" type="text" placeholder="Telefone" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <select className="form-control" type="text">
              <option selected>Escolha o horário</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <select className="form-control" type="text">
              <option selected>Escolha a unidade</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button type="button" className="btn btn-success btn-block">
              AGENDAR TEST DRIVE
          </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CardSolicitarContato;