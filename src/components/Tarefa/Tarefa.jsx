import React, { Component } from 'react'
import "./Tarefa.css"
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg"
import {ReactComponent as EditSVG} from "../../assets/img/edit.svg"
import { ReactComponent as CompletSVG} from "../../assets/img/complet.svg";

export class Tarefa extends Component {

    apagar(){
        const indice = this.props.indice;
        this.props.apagarTarefa(indice);
    }

    render() {
        return (
            <div className="tarefa">
                <h1 className="tarefa_titulo">{this.props.tarefa}</h1>
                <CompletSVG/>
                <EditSVG/>
                <DeleteSVG onClick={this.apagar.bind(this)}/>         
            </div>
        )
    }
}

export default Tarefa
