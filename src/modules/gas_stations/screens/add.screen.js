import React, { Component } from 'react';
import MaskedFormControl from 'react-bootstrap-maskedinput'
import axios from 'axios';
import {connect} from "react-redux";

class Add extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCnpj = this.onChangeCnpj.bind(this);
        this.onChangeCep = this.onChangeCep.bind(this);
        this.onChangeCep = this.onChangeCep.bind(this);
        this.onChangeGasolina = this.onChangeGasolina.bind(this);
        this.onChangeAlcool = this.onChangeAlcool.bind(this);
        this.onChangeDiesel = this.onChangeDiesel.bind(this);
        this.onChangeGas = this.onChangeGas.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            gasStationName: '',
            gasStationCnpj: '',
            gasStationCep: '',
            gasolina: '',
            alcool: '',
            diesel: '',
            gas: ''
        }
    }
    onChangeName(e) {
        this.setState({
            gasStationName: e.target.value
        });
    }
    onChangeCnpj(e) {
        this.setState({
            gasStationCnpj: e.target.value
        })
    }
    onChangeCep(e) {
        this.setState({
            gasStationCep: e.target.value
        });
        console.log(this.state.gasStationCep)
    }

    onChangeGasolina(e) {
        this.setState({
            gasolina: e.target.value
        });
        console.log(this.state.gasolina)
    }

    onChangeAlcool(e) {
        this.setState({
            alcool: e.target.value
        });
        console.log(this.state.alcool)
    }

    onChangeDiesel(e) {
        this.setState({
            diesel: e.target.value
        });
        console.log(this.state.diesel)
    }

    onChangeGas(e) {
        this.setState({
            gas: e.target.value
        });
        console.log(this.state.gas)
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            gasStationName: this.state.gasStationName,
            gasStationCnpj: this.state.gasStationCnpj,
            gasStationCep: this.state.gasStationCep,
            gasolina: this.state.gasolina,
            alcool: this.state.alcool,
            diesel: this.state.diesel,
            gas: this.state.gas
        };
        axios.post('http://localhost:4000/business/add', obj)
            .then(alert('Posto cadastrado com sucesso!'));

        this.props.history.push('/list');
    }

    render() {
        return (
            <div style={{backgroundColor:'#EEEEEE', marginTop: 10 }}>
                <h3 align="center">Adicionar Novo Posto</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome do Posto:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.gasStationName}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>CNPJ: </label>
                        <MaskedFormControl type='text'
                                           mask='11.111.111/1111-11'
                                           value={this.state.gasStationCnpj}
                                           onChange={this.onChangeCnpj}/>
                    </div>
                    <div className="form-group">
                        <label>CEP: </label>
                        <MaskedFormControl type='text'
                                           mask='11.111-111'
                                           value={this.state.gasStationCep}
                                           onChange={this.onChangeCep}/>
                    </div>
                    <div className="form-group">
                        <label>PREÇO GASOLINA: </label>
                        <MaskedFormControl type='text'
                                           mask='R$ 11,111'
                                           value={this.state.gasolina}
                                           onChange={this.onChangeGasolina}/>
                    </div>
                    <div className="form-group">
                        <label>PREÇO ÁLCOOL: </label>
                        <MaskedFormControl type='text'
                                           mask='R$ 11,111'
                                           value={this.state.alcool}
                                           onChange={this.onChangeAlcool}/>
                    </div>
                    <div className="form-group">
                        <label>PREÇO DIESEL: </label>
                        <MaskedFormControl type='text'
                                           mask='R$ 11,111'
                                           value={this.state.diesel}
                                           onChange={this.onChangeDiesel}/>
                    </div>
                    <div className="form-group">
                        <label>PREÇO GÁS: </label>
                        <MaskedFormControl type='text'
                                           mask='R$ 11,111'
                                           value={this.state.gas}
                                           onChange={this.onChangeGas}/>
                    </div>
                    <div className="form-group">
                        <input type="submit"
                               value="Adicionar"
                               className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {add} = state;
    return {add}
};

export default connect(mapStateToProps)(Add);

