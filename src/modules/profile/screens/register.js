import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as utils from '../utils/userUtils'
import {Redirect} from 'react-router-dom'

class Register extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            password: '',
            redirect: false
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    setRedirect() {
        this.setState({
            redirect: true
        })
    }

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to='/home'/>
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const name = this.state.name;
        const email = this.state.email;
        const password = this.state.password;

        utils.createUser(name, email, password)
            .then(result => {
                (result) ? this.setRedirect() : alert('Ocorreu um erro ao criar usuário!')
            }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div style={{backgroundColor: '#EEEEEE', marginTop: 10}}>
                {this.renderRedirect()}
                <h3 align="center">Registrar-se</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>E-mail: </label>
                        <input
                            type="e-mail"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Senha </label>
                        <input
                            type="password"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div>
                    <div className="form-group" align="center">
                        <input type="submit"
                               value="Registrar"
                               className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {register} = state;
    return {register}
};

export default connect(mapStateToProps)(Register);

