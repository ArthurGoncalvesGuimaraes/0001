import React, { Component } from 'react';
//import { ClienteService } from '../service/ClienteService';
import { ClienteService } from '../service/ClienteService';
import { Messages } from 'primereact/messages';

interface MyProps { showMe: Boolean }
export class Dashboard extends Component <MyProps>{

    constructor(props) {
    

        super(props);
        this.state = {
            email: '',
            name: '',
            phone: '',
            website: '',
            company: {
                name: '',
                catchPhrase: '',
                bs: ''
            },
            address: {
                street: '',
                suite: '',
                city: '',
                zipcode: '',
                geo: {
                    lat:'',
                    lng:''
                }
            }
        };
        this.showMe = false;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.messages = new Messages();
        this.service = new ClienteService();
    }

    componentDidMount() {
        
    }

    handleInputChange(event) {
        console.log('handle change')
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    nextStep(event) {
       
        this.getUser(this.state.email);

    }
    showError(summary, detail) {
        let msg = { severity: 'error', summary: summary, detail: detail };
        this.messages.show(msg);
    }

    getUser(email) {
        this.service.getUser(this, email);
        this.showMe = true;
    }
    saveCliente() {
        this.service.post(this, this.state);
    }

    render() {        
        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                        <h1>Cadastro de Clientes</h1>
                        <p>Use o menu ao lado para executar as operações.</p>
                        <hr />
                        <div className="row content-form">

                            <div className="group-form">
                                
                                <input className="control-form" type="email" name="email" onChange={this.handleInputChange} value={this.state.email}  placeholder="Preenchar o e-mail, para iniciar o cadastro" />
                            </div>
                            {
                                this.state.name === ''  ?
                            
                            <div className="text-rigth">
                            <span className="btn  btn-primary" onClick={() => this.nextStep()}> Continuar com o Cadastro</span>
                                    </div>

                                    : null
                            }
                        </div>

                        {this.state.name !==''   ? 
                        <div className="row content-form">

                                <div className="group-form">
                                    <label> Nome </label>
                                <input className="control-form" type="text" name="name" onChange={this.handleInputChange} value={this.state.name} placeholder="Nome"  disabled />
                            </div>
                                <div className="group-form">
                                    <label> Apelido </label>
                                    <input className="control-form" type="text" name="username" onChange={this.handleInputChange} value={this.state.username} disabled/>
                            </div>
                                <div className="group-form">
                                    <label> Telefone </label>
                                    <input className="control-form" type="text" name="phone" onChange={this.handleInputChange} value={this.state.phone} disabled/>
                            </div>
                                <div className="group-form">
                                    <label> Apelido </label>
                                    <input className="control-form" type="text" name="website" onChange={this.handleInputChange} value={this.state.website} disabled/>
                            </div>

                                <h2 className="text-center"> Endereço </h2>
                                <div className="group-form">
                                    <label> Rua </label>
                                    <input className="control-form" type="text" name="street" onChange={this.handleInputChange} value={this.state.address.street} placeholder="Rua" disabled/>
                            </div>
                                <div className="group-form">
                                    <label> Bairro </label>
                                    <input className="control-form" type="text" name="suite" onChange={this.handleInputChange} value={this.state.address.suite} disabled />
                            </div>
                                <div className="group-form">
                                    <label> Cidade </label>
                                    <input className="control-form" type="text" name="city" onChange={this.handleInputChange} value={this.state.address.city} disabled />
                            </div>
                                <div className="group-form">
                                    <label> CEP </label>
                                    <input className="control-form" type="text" name="city" onChange={this.handleInputChange} value={this.state.address.zipcode} disabled/>
                            </div>

                                <div className="group-form">
                                    <label> Latitude </label>
                                    <input className="control-form" type="text" name="lat" onChange={this.handleInputChange} value={this.state.address.geo.lat} disabled/>
                            </div>
                                <div className="group-form">
                                    <label> Longitude </label>
                                    <input className="control-form" type="text" name="lng" onChange={this.handleInputChange} value={this.state.address.geo.lng} disabled />
                            </div>

                                <h2 className="text-center"> Empresa </h2>
                                <div className="group-form">
                                    <label> Nome </label>
                                    <input className="control-form" type="text" name="name" onChange={this.handleInputChange} value={this.state.company.name} disabled />
                            </div>
                                <div className="group-form">
                                    <input className="control-form" type="text" name="catchPhrase" onChange={this.handleInputChange} value={this.state.company.catchPhrase} disabled/>
                            </div>
                                <div className="group-form">
                                    <input className="control-form" type="text" name="catcbshPhrase" onChange={this.handleInputChange} value={this.state.company.bs} disabled/>
                            </div>

                            <div className="text-rigth">
                                <span className="btn  btn-primary" onClick={() => this.saveCliente()}> Continuar com o Cadastro</span>
                            </div>
                        </div>

                       : null }


         
    
            
                           
                    </div>
                </div>
            </div>
        );
    }

 
}