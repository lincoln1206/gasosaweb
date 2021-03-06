import React, {Component} from 'react';
import axios from 'axios';
import TableRow from '../../../components/TableRow';
import {connect} from "react-redux";

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {business: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/business')
            .then(response => {
                this.setState({business: response.data});
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        return this.state.business.map(function (object, i) {
            return <TableRow obj={object} key={i}/>;
        });
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/business')
            .then(response => {
                this.setState({business: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3 align="center">Lista de Postos</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>Nome do Posto</th>
                        <th>CNPJ</th>
                        <th>CEP</th>
                        <th colSpan="2">Ação</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {list} = state;
    return {list}
};

export default connect(mapStateToProps)(List);
