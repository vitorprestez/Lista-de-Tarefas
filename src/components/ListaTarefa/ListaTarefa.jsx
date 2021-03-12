import React, { Component } from "react";
import Tarefa from "../Tarefa/Tarefa";
import "./ListaTarefa.css";

export class ListaTarefa extends Component {


  _handleEditaTitulo(evento) {
    evento.stopPropagation();
    this.editarTitulo = evento.target.value;
    console.log(this.editarTitulo);
  }

  _editarTarefa(evento, index) {
    //evento.preventDefault();
    evento.stopPropagation();
    //chamo a função que esta no meu App.js
    let _arrayAuxiliar = this.props.arrayTarefas;
    _arrayAuxiliar[index].titulo = this.editarTitulo;
    _arrayAuxiliar[index].editar = false;
    this.setState({
      arrayTarefas:_arrayAuxiliar
    })
    this.props.editarTarefa(this.index);
  }
  render() {
    //linha 13-percorro o meu array
    //linha 16- minha tarefa(Tarefa) recebe a tarefa que esta sendo mapeada
    return (
      <section>
        <ul className="lista-tarefa">
          {this.props.arrayTarefas.map((tarefa, index) => {
            if (!tarefa.editar) {
              return (
                <li className="lista-tarefa_item_enabled" key={index}>
                  <div
                    className={
                      !tarefa.concluir
                        ? "tarefa-titulo"
                        : "tarefa-titulo_disabled"
                    }
                  >
                    <Tarefa
                      className="tarefa"
                      indice={index}
                      tarefa={tarefa.titulo}
                      concluirTarefa={this.props.concluirTarefa}
                      editarTarefa={this.props.editarTarefa}
                      apagarTarefa={this.props.apagarTarefa}
                    />
                  </div>
                </li>
              );
            } else {
              return (
                <form className="editar-tarefa">
                  <input
                    id="editar-tarefa_input"
                    type="text"
                    placeholder="Digite sua alteração..."
                    className="editar-tarefa_input"
                    onChange={this._handleEditaTitulo.bind(this)}
                  />

                  <button
                    className="editar-tarefa_button"
                    //onSubmit={this._editarTarefa.bind(this)}
                  >
                    Editar
                  </button>
                </form>
              );
            }
          })}

          <div className="limpar-itens">
            <button
              className="limpar-itens_button"
              onClick={this.props.limparLista}
            >
              Limpar itens
            </button>
          </div>
        </ul>
      </section>
    );
  }
}

export default ListaTarefa;
