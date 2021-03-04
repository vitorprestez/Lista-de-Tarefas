import React, { Component } from 'react'
import FormTarefa from './components/FormTarefa/FormTarefa'
import ListaTarefa from './components/ListaTarefa/ListaTarefa'
import RemoverTarefas from "./components/RemoverTarefas/RemoverTarefas";


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


  //função remover recebe o indice da tarefa clicada, 
  //removo o item do array usando o splice
  //seto o state atribuindo o array aux para o array original
  removerUmaTarefa(index){
    let arrayAuxiliar = this.state.arrayTarefas;
    arrayAuxiliar.splice(index,1);
    this.setState({
      arrayTarefas:arrayAuxiliar})
  }

  removerTodasTarefa(){
    let arrayAuxiliar = this.state.arrayTarefas;
    arrayAuxiliar.splice(0,this.arrayTarefas.length());
    this.state({
      arrayTarefas:arrayAuxiliar
    })
  }


  render(){
    return (  
      //linha 27- atualizado meu array para renderizar   
      <section className="conteudo">
        
          <FormTarefa criarTarefa = {this.criarTarefa.bind(this)}/>     
          <ListaTarefa arrayTarefas={this.arrayTarefas} 
          apagarTarefa = {this.removerUmaTarefa.bind(this)}/>
          <RemoverTarefas/>
      </section>  
    );
  }
}

export default App
