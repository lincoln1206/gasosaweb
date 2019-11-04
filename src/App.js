import React, {Component} from 'react';
import {Navbar, Nav, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {homeScreen} from './modules/home/index';
import {addScreen, editScreen, listScreen} from './modules/gas_stations/index'
import {loginScreen, registerScreen, forgotPasswordScreen} from './modules/profile/index';
import {logo2} from './assets/images';
import store from './redux/store';
import {Provider} from 'react-redux';

export const data = store;

export default class App extends Component {

    componentDidMount() {
        console.log(data.getState().profileReducer.profile.isLoggedIn)
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="/home">Gasosa
                            <img
                                src={logo2}
                                width={30}
                                height={30}
                                className="d-inline-block align-content-lg-center"
                                alt="gasosa logo"
                            />
                        </Navbar.Brand>
                        <Nav.Link href="/home">Início</Nav.Link>
                        {true === true && <Nav className="mr-auto">
                            <Nav.Link href="/add">Adicionar Postos</Nav.Link>
                            <Nav.Link href="/list">Lista de Postos</Nav.Link>
                        </Nav>}
                        <Form inline>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Registrar-se</Nav.Link>
                        </Form>
                    </Navbar>
                    <div className="container">
                        <br/>
                        <Switch>
                            <Route exact path='/home' component={homeScreen}/>
                            <Route exact path='/add' component={addScreen}/>
                            <Route path='/edit/:id' component={editScreen}/>
                            <Route path='/list' component={listScreen}/>
                            <Route path='/login' component={loginScreen}/>
                            <Route path='/register' component={registerScreen}/>
                            <Route path='/forgot' component={forgotPasswordScreen}/>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }
}
