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
      //variavel auxixilar recebe o que foi escrito no input
      const novaTarefa =titulo;
      //adiciona o elemento na ultima poisção com o push
      this.arrayTarefas.push(novaTarefa);
      //atualiza o estado interno do componente(pra o estado tarefas do objeto ser igual o atributo tarefas passado)
      this.setState({
        arrayTarefas: this.arrayTarefas
      })
  }
  render(){
    return (  
      //linha 27- atualizado meu array para renderizar   
      <section className="conteudo">
          <FormTarefa criarTarefa = {this.criarTarefa.bind(this)} arrayTarefas={this.arrayTarefas}/>     
          <ListaTarefa arrayTarefas={this.arrayTarefas}/>
      </section>  
    );
  }
}

export default App
