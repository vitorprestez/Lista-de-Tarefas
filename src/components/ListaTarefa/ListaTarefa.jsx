import React, { Component } from 'react'
import Tarefa from '../Tarefa/Tarefa'
import "./ListaTarefa.css"

export class ListaTarefa extends Component{

 
    render() {
        return (
                <ul className="lista-tarefa">
                    {this.props.arrayTarefas.map((tarefa,index)=>{
                        return(
                            <li className="lista-tarefa_item" key={index}>
                            <Tarefa tarefa={tarefa}/>
                        </li>
                        );
                    })}                  
                </ul>
        )
    }
}

export default ListaTarefa
