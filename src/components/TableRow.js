import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/business/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.gasStationName}
                </td>
                <td>
                    {this.props.obj.gasStationCnpj}
                </td>
                <td>
                    {this.props.obj.gasStationCep}
                </td>
                <td>
                    <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Editar Posto</Link>
                </td>
                <td>
                    <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Alterar Preços</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Deletar</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;
