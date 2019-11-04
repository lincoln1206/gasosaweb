import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as utils from '../utils/userUtils'
import {Redirect} from 'react-router-dom'

class Forgot extends Component {
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            password: '',
            redirect: false,
            user: null
        }
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

        const email = this.state.email;

        utils.sendEmailWithPassword(email)
            .then(result => {
                (result) ? this.setRedirect(): alert('Ocorreu um erro ao enviar e-mail!')
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div style={{backgroundColor: '#EEEEEE', marginTop: 10}}>
                {this.renderRedirect()}
                <h3 align="center">Recuperação de Senha</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>E-mail: </label>
                        <input
                            type="e-mail"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group" align="center">
                        <input type="submit"
                               value="Enviar email de recuperação de senha"
                               className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {forgot} = state;
    return {forgot}
};

export default connect(mapStateToProps)(Forgot);

