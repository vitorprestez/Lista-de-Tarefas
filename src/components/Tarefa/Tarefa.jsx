import React, { Component } from 'react'
import "./Tarefa.css"
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg"

export class Tarefa extends Component {

    render() {
        return (
            <div className="tarefa">
                <h1 className="tarefa_titulo">{this.props.tarefa}</h1>
                <DeleteSVG/>
            </div>
        )
    }
}

export default Tarefa
