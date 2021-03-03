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
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarTarefa(this.titulo);
    
        //this.props.tarefas.push(this.titulo);
    }
    render() {
        return (
            <form className="form-tarefa"
                onSubmit={this._criarTarefa.bind(this)}              
            >
                <input type="text" 
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
