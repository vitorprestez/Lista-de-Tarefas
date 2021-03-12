import React, { Component } from "react";
import FormTarefa from "./components/FormTarefa/FormTarefa";
import ListaTarefa from "./components/ListaTarefa/ListaTarefa";
//import LimparLista from "./components/RemoverTarefas/LimparLista";

class App extends Component {
  constructor() {
    super();
    this.arrayTarefas = JSON.parse(localStorage.getItem("lista"));
    if (this.arrayTarefas === null) {
      this.arrayTarefas = [{}];
    }
    this.state = {};
  }
  criarTarefa(titulo, concluir, editar) {
    //variavel auxixilar recebe o que foi escrito no input
    let novaTarefa = { titulo, concluir, editar };
    //adiciona o elemento na ultima poisção com o push
    if (novaTarefa.titulo !== "") {
      this.arrayTarefas.push(novaTarefa);
      //atualiza o estado interno do componente(pra o estado tarefas do objeto ser igual o atributo tarefas passado)
      this.setState({
        arrayTarefas: this.arrayTarefas,
      });

      localStorage.setItem("lista", JSON.stringify(this.arrayTarefas));
    }
  }

  //função remover recebe o indice da tarefa clicada,
  //removo o item do array usando o splice
  //seto o state atribuindo o array aux para o array original
  removerUmaTarefa(index) {
    let _arrayAuxiliar = this.arrayTarefas;
    _arrayAuxiliar.splice(index, 1);
    console.log(_arrayAuxiliar);
    this.setState({
      arrayTarefas: _arrayAuxiliar,
    });
    localStorage.setItem("lista", JSON.stringify(this.arrayTarefas));
  }

  limparLista() {
    console.log(this.arrayTarefas);
    let _arrayAuxiliar = this.arrayTarefas;
    _arrayAuxiliar.splice(0, this.arrayTarefas.length);
    this.setState({
      arrayTarefas: _arrayAuxiliar,
    });

    localStorage.clear();
  }

  editarTarefa(index) {
    let _arrayAuxiliar = this.arrayTarefas;
    _arrayAuxiliar[index].editar=true;
    this.setState({
      arrayTarefas: _arrayAuxiliar
    });
    
    localStorage.setItem("lista", JSON.stringify(this.arrayTarefas));
  }

  concluirUmaTarefa(index) {
    let _arrayAuxiliar = this.arrayTarefas[index];
    _arrayAuxiliar.concluir = true;
    //console.log(_arrayAuxiliar);
    this.setState({
      arrayTarefas: _arrayAuxiliar,
    });
    localStorage.setItem("lista", JSON.stringify(this.arrayTarefas));
  }

  render() {
    return (
      <section className="conteudo">
        <FormTarefa criarTarefa={this.criarTarefa.bind(this)} />
        <ListaTarefa
          arrayTarefas={this.arrayTarefas}
          apagarTarefa={this.removerUmaTarefa.bind(this)}
          limparLista={this.limparLista.bind(this)}
          concluirTarefa={this.concluirUmaTarefa.bind(this)}
          editarTarefa={this.editarTarefa.bind(this)}
        />
      </section>
    );
  }
}

export default App;
