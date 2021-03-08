import React, { Component } from 'react'
import "./FormTarefa.css"

export class FormTarefa extends Component {

    constructor(props){
        super(props);
        this.titulo="";

    }
    _handleTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;       
    }

    _criarTarefa(evento){
        //evento.preventDefault();
        evento.stopPropagation();
        //chamo a função que esta no meu App.js
        this.props.criarTarefa(this.titulo);
    }

    render() {
        return (
            <form className="form-tarefa"
                onSubmit={this._criarTarefa.bind(this)}      
            >
                <h1>To-Do List</h1>
                <input id="nome-tarefa_input" type="text" 
                placeholder="Digite sua próxima tarefa..."
                className="form-tarefa_input"
                onChange={this._handleTitulo.bind(this)}
                />

                <button className="form-tarefa_button">Adicionar</button>
            </form>
        )
    }
}

export default FormTarefa
