import React, { Component } from 'react'
import "./Tarefa.css"

export class Tarefa extends Component {

    render() {
        return (
            <div className="tarefa">
                <h1 className="tarefa_titulo">{this.props.tarefa}</h1>
            </div>
        )
    }
}

export default Tarefa
