import React, { Component } from 'react';
import {gas1,gas2,gas3} from '../../../assets/images'
import { Carousel} from 'react-bootstrap';
import { MDBContainer} from 'mdbreact';
import {connect} from "react-redux";

class Home extends Component {
    render() {
        return (
            <div style={{backgroundColor: '#EEEEEE',height: '100%', position: 'absolute', left: '0px', width: '100%', overflow: 'hidden'}}>
                <MDBContainer>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={gas1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Atualize os preços dos combustíveis diariamente</h3>
                                <p>Através do Gasosa WEB você pode atualizar os preços dos combustíveis do seu posto para que todos vejam!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={gas2}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Obtenha mais clientes</h3>
                                <p>Através da divulgação do seu posto em nossa plataforma, mais consumidores irão até o seu posto!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={gas3}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Preços na palma da mão</h3>
                                <p>Através de nosso aplicativo para Android e IOS, os conumidores pode ver os preços atualizados em tempo real!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel> <br/>
                    <h1 style={{display: 'flex', justifyContent: 'center'}}>Gasosa</h1> <br/>
                    <h2 style={{display: 'flex', justifyContent: 'center'}}>Plataforma WEB para gerenciamento de postos de combustíveis</h2> <br/>
                </MDBContainer>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    const {home} = state;
    return {home}
};

export default connect(mapStateToProps)(Home);