import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loggedIn} from '../redux/actions'
import {bindActionCreators} from "redux";
import * as utils from '../utils/userUtils'
import * as firebase from "../../../configs/firebase";
import {Link, Redirect} from 'react-router-dom'
import {logo2} from '../../../assets/images';

class Login extends Component {
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
        const password = this.state.password;

        utils.userLogin(email, password)
            .then((result) => {
                (result) ? this.setRedirect() : alert('Ocorreu um erro ao fazer login!')
            })
            .then(
                this.props.loggedIn(firebase.auth.currentUser)
            )
            .catch((error) => {
                console.log(error);
            });

        console.log(this.props.loggedIn(firebase.auth.currentUser));
    }

    render() {
        return (
            <div style={{backgroundColor: '#EEEEEE', marginTop: 10}}>
                {this.renderRedirect()}
                <div className="form-group" align="center">
                    <img
                        src={logo2}
                        width={150}
                        height={150}
                        className="d-inline-block align-content-lg-center"
                        alt="gasosa logo"
                    />
                </div>

                <h3 align="center">Login</h3>
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
                               value="Entrar"
                               className="btn btn-primary"/>
                    </div>
                    <div className="form-group" align="right">
                        <Link to={"/forgot"}>Esqueci minha senha</Link>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {login} = state;
    return {login}
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        loggedIn
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

