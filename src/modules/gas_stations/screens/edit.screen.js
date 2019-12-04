import React, {Component} from 'react';
import axios from 'axios';
import MaskedFormControl from "react-bootstrap-maskedinput";
import {connect} from "react-redux";

class Edit extends Component {
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
            gas: '',
            business: []
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
            gasStationName: this.state.gasStationName === undefined ? this.state.business.gasStationName : this.state.gasStationName,
            gasStationCnpj: this.state.gasStationCnpj === undefined ? this.state.business.gasStationCnpj : this.state.gasStationCnpj,
            gasStationCep: this.state.gasStationCep === undefined ? this.state.business.gasStationCep : this.state.gasStationCep,
            gasolina: this.state.gasolina === undefined ? this.state.business.gasolina : this.state.gasolina,
            alcool: this.state.alcool === undefined ? this.state.business.alcool : this.state.alcool,
            diesel: this.state.diesel === undefined ? this.state.business.diesel : this.state.diesel,
            gas: this.state.gas === undefined ? this.state.business.gas : this.state.gas
        };

        axios.post('http://localhost:4000/business/update/' + this.props.match.params.id, obj)
            .then(alert('Atualização realizada com sucesso!'));

        this.props.history.push('/list');
    }

    componentDidMount() {
        axios.get('http://localhost:4000/business/' + this.props.match.params.id)
            .then(response => {
                this.setState({business: response.data});
                console.log(this.state.business)
            })
            .catch(function (error) {
                console.log(error);
            });

            this.setState(
                {gasStationName: this.state.business.gasStationName,
                    gasStationCnpj: this.state.business.gasStationCnpj,
                    gasStationCep: this.state.business.gasStationCep,
                    gasolina: this.state.business.gasolina,
                    alcool: this.state.business.alcool,
                    diesel: this.state.business.diesel,
                    gas: this.state.business.gas}
                );
        console.log(this.state)
    }

    render() {
        return (
            <div style={{backgroundColor:'#EEEEEE',marginTop: 10}}>
                <h3 align="center">Atualizar Posto</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome do Posto: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.gasStationName}
                            placeholder={this.state.business.gasStationName}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>CNPJ: </label>
                        <MaskedFormControl type='text'
                                           mask='11.111.111/1111-11'
                                           value={this.state.gasStationCnpj}
                                           placeholder={this.state.business.gasStationCnpj}
                                           onChange={this.onChangeCnpj}/>
                    </div>
                    <div className="form-group">
                        <label>CEP: </label>
                        <MaskedFormControl type='text'
                                           mask='11.111-111'
                                           value={this.state.gasStationCep}
                                           placeholder={this.state.business.gasStationCep}
                                           onChange={this.onChangeCep}/>
                    </div>
                    <div className="form-group">
                        <label>PREÇO GASOLINA: </label>
                        <MaskedFormControl type='text'
                                           mask='R$ 11,111'
                                           value={this.state.gasolina}
                                           placeholder={this.state.business.gasolina}
                                           onChange={this.onChangeGasolina}/>
                    </div>
                    <div className="form-group">
                        <label>PREÇO ÁLCOOL: </label>
                        <MaskedFormControl type='text'
                                           mask='R$ 11,111'
                                           value={this.state.alcool}
                                           placeholder={this.state.business.alcool}
                                           onChange={this.onChangeAlcool}/>
                    </div>
                    <div className="form-group">
                        <label>PREÇO DIESEL: </label>
                        <MaskedFormControl type='text'
                                           mask='R$ 11,111'
                                           value={this.state.diesel}
                                           placeholder={this.state.business.diesel}
                                           onChange={this.onChangeDiesel}/>
                    </div>
                    <div className="form-group">
                        <label>PREÇO GÁS: </label>
                        <MaskedFormControl type='text'
                                           mask='R$ 11,111'
                                           value={this.state.gas}
                                           placeholder={this.state.business.gas}
                                           onChange={this.onChangeGas}/>
                    </div>
                    <div className="form-group">
                        <input type="submit"
                               value="Atualizar Posto"
                               className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {edit} = state;
    return {edit}
};

export default connect(mapStateToProps)(Edit);
