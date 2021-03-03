import React, { Component } from 'react'
import "./Tarefa.css"
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg"
import {ReactComponent as EditSVG} from "../../assets/img/edit.svg"
import { ReactComponent as CompletSVG} from "../../assets/img/complet.svg";

export class Tarefa extends Component {

    render() {
        return (
            <div className="tarefa">
                <h1 className="tarefa_titulo">{this.props.tarefa}</h1>
                <CompletSVG/>
                <EditSVG/>
                <DeleteSVG/>           
            </div>
        )
    }
}

export default Tarefa
