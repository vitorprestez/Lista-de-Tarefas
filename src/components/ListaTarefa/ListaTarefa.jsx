import React, { Component } from "react";
import Tarefa from "../Tarefa/Tarefa";
import "./ListaTarefa.css";

export class ListaTarefa extends Component {

  render() {
    //linha 13-percorro o meu array
    //linha 16- minha tarefa(Tarefa) recebe a tarefa que esta sendo mapeada
    return (
      <section>
        <ul className="lista-tarefa">
          {this.props.arrayTarefas.map((tarefa, index) => {
            return (
              <li className="lista-tarefa_item_enabled" key={index}>
                <div>
                  <Tarefa
                    className="tarefa"
                    indice={index}
                    tarefa={tarefa.titulo}
                    estado={tarefa.editar}
                    concluir={tarefa.concluir}
                    concluirTarefa={this.props.concluirTarefa}
                    editarTarefa={this.props.editarTarefa}
                    apagarTarefa={this.props.apagarTarefa}
                    atualizaTarefa={this.props.atualizaTarefa}
                  />
                </div>
              </li>
            );
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
