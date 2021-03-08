import React, { Component } from 'react'
import Tarefa from '../Tarefa/Tarefa'
import "./ListaTarefa.css"

export class ListaTarefa extends Component{

    render() {
                        //linha 13-percorro o meu array
            //linha 16- minha tarefa(Tarefa) recebe a tarefa que esta sendo mapeada
        return (
            <section>

                <ul className="lista-tarefa" > 
                    {this.props.arrayTarefas.map((tarefa,index)=>{
                        return(
                            <li className="lista-tarefa_item" key={index}>
                            <Tarefa 
                            indice={index}
                            apagarTarefa = {this.props.apagarTarefa}
                            tarefa={tarefa}
                            />
                           
                        </li>

                        );
                    })} 

                     
                    <div className="limpar-itens">
                        <button className="limpar-itens_button"
                            onClick={(this.props.limparLista)}>Limpar itens</button>
                    </div> 
                         
                </ul>
                
            </section>
            
        )
    }
}

export default ListaTarefa
