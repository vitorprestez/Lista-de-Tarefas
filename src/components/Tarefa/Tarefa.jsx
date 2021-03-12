import React, { Component } from "react";
import "./Tarefa.css";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import EditIcon from "@material-ui/icons/Edit";

export class Tarefa extends Component {
  _concluirTarefa() {
    const indice = this.props.indice;
    this.props.concluirTarefa(indice);
  }
  _apagar() {
    const indice = this.props.indice;
    this.props.apagarTarefa(indice);
  }
  _editarTarefa() {
    const indice = this.props.indice;
    this.props.editarTarefa(indice);
  }

  render() {
    return (
      <div className="tarefa">
        <h1
          className="tarefa_titulo"
        >
          {this.props.tarefa}
        </h1>

        <CheckCircleOutlineIcon
          className="tarefa-button_complet"
          id="botaoConcluir"
          onClick={this._concluirTarefa.bind(this)}
        />

        <EditIcon
          className="tarefa-button_edit"
          onClick={this._editarTarefa.bind(this)}
        />

        <DeleteOutlineIcon
          className="tarefa-button_delete"
          onClick={this._apagar.bind(this)}
        />
      </div>
    );
  }
}

export default Tarefa;
