import React, {Component} from 'react';
import axios from 'axios';
import MaskedFormControl from "react-bootstrap-maskedinput";

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCnpj = this.onChangeCnpj.bind(this);
        this.onChangeCep = this.onChangeCep.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            gasStationName: '',
            gasStationCnpj: '',
            gasStationCep: ''
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
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            gasStationName: this.state.gasStationName,
            gasStationCnpj: this.state.gasStationCnpj,
            gasStationCep: this.gasStationCep
        };
        axios.post('http://localhost:4000/business/update/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/index');
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
                        <input type="submit"
                               value="Atualizar Posto"
                               className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
