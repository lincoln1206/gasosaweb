import React, { Component } from 'react';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/home.component';
import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import {logo} from './assets/images';

class App extends Component {
    render() {
        return (
            <Router>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/home">Gasosa
                        <img
                        src={logo}
                        width={30}
                        height={30}
                        className="d-inline-block align-content-lg-center"
                        alt="gasosa logo"
                        />
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Início</Nav.Link>
                        <Nav.Link href="/create">Adicionar Postos</Nav.Link>
                        <Nav.Link href="/index">Lista de Postos</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Pesquisar" className="mr-sm-2" />
                        <Button variant="outline-light">Pesquisa</Button>
                    </Form>
                </Navbar>
                <div className="container">
                     <br/>
                    <Switch>
                        <Route exact path='/home' component={ Home } />
                        <Route exact path='/create' component={ Create } />
                        <Route path='/edit/:id' component={ Edit } />
                        <Route path='/index' component={ Index } />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
