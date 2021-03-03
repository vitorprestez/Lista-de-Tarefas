import React, { Component } from 'react'
import FormTarefa from './components/FormTarefa/FormTarefa'
import ListaTarefa from './components/ListaTarefa/ListaTarefa'


class App extends Component {
  constructor(){
    super();
    this.arrayTarefas = [];
    this.state = {}
  }
  criarTarefa(titulo){
      const novaTarefa =titulo;
      this.arrayTarefas.push(novaTarefa);
      //atualiza o estado interno do componente(pra o estado tarefas do objeto ser igual o atributo tarefas passado)
      this.setState({
        arrayTarefas: this.arrayTarefas
      })
  }
  render(){
    return (     
      <section className="conteudo">
          <FormTarefa criarTarefa = {this.criarTarefa.bind(this)} arrayTarefas={this.arrayTarefas}/>
          <ListaTarefa arrayTarefas={this.arrayTarefas}/>
      </section>  
    );
  }
}

export default App
