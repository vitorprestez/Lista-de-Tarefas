import React, { Component } from "react";
import "./Tarefa.css";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import EditIcon from "@material-ui/icons/Edit";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

export class Tarefa extends Component {
  constructor(props) {
    super(props);
    this.array = this.props.arrayTarefas;
    this.tituloNovo = "";
  }
  _concluirTarefa() {
    const indice = this.props.indice;
    this.props.concluirTarefa(indice);
  }
  _apagar() {
    const indice = this.props.indice;
    this.props.apagarTarefa(indice);
  }
  _mostraInput() {
    const indice = this.props.indice;
    this.props.editarTarefa(indice);
  }
  _esconderInput() {
    const indice = this.props.indice;
    this.props.atualizaTarefa(indice, this.tituloNovo);
  }

  _handleEditaTitulo(evento) {
    evento.stopPropagation();
    this.tituloNovo = evento.target.value;
  }

  render() {
    if (this.props.estado === true) {
      return (
        <div className="tarefa">
          <input
            className="input-edita"
            placeholder={this.props.tarefa}
            onChange={this._handleEditaTitulo.bind(this)}
            onSubmit={this._esconderInput.bind()}
          ></input>

          <CheckCircleOutlineIcon
            className={
              !this.props.concluir
                ? "tarefa-button_complet"
                : "tarefa-button_complet_disabled"
            }
            onClick={this._concluirTarefa.bind(this)}
          />

          <DoneOutlineIcon
            className="tarefa-button_edit_complet"
            onClick={this._esconderInput.bind(this)}
          />

          <DeleteOutlineIcon
            className="tarefa-button_delete"
            onClick={this._apagar.bind(this)}
          />
        </div>
      );
    } else {
      return (
        <div className="tarefa">
          <h1
            className={
              !this.props.concluir ? "tarefa_titulo" : "tarefa_titulo_disabled"
            }
          >
            {this.props.tarefa}
          </h1>

          <CheckCircleOutlineIcon
            className={
              !this.props.concluir
                ? "tarefa-button_complet"
                : "tarefa-button_complet_disabled"
            }
            onClick={this._concluirTarefa.bind(this)}
          />

          <EditIcon
            className="tarefa-button_edit"
            onClick={this._mostraInput.bind(this)}
          />

          <DeleteOutlineIcon
            className="tarefa-button_delete"
            onClick={this._apagar.bind(this)}
          />
        </div>
      );
    }
  }
}

export default Tarefa;
