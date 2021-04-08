import React, {Component} from 'react';
import {DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import {Messages} from 'primereact/messages';
import { Growl } from 'primereact/growl';
import { ClienteService } from '../../service/ClienteService';


export class ClienteConsulta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: ""
            },
            listaClientes: [
                {
                    name: "Leanne Graham",
                    username: "Bret",
                    email: "Sincere@april.biz",
                    id:"1",
                    address: {
                        stree: "Kulas Light",
                        suite: "Apt. 556",
                        city: "Gwenborough",
                        zipcode: "92998-3874",
                        geo: {
                            lat: "-37.3159",
                            lng: "81.1496"
                        }
                    },
                    phone: "1-770-736-8031 x56442",
                    website: "hildegard.org",
                    company: {
                        name: "Romaguera-Crona",
                        catchPhrase: "Multi-layered client-server neural-net",
                        bs: "harness real-time e-markets"
                    }
                }
            ]
        };   
        this.showError = this.showError.bind(this);
        
        /* Específico da página */
        this.service = new ClienteService();

        this.editItem = this.editItem.bind(this);

        this.deleteItem = this.deleteItem.bind(this);
        this.actionDataTable = this.actionDataTable.bind(this);
        this.messages = new Messages();

    }
    componentDidMount() {
        this.service.getAllByForm(this);
    }

    showError(summary,detail) {
        let msg = { severity: 'error', summary: summary, detail: detail };
        this.messages.show(msg);
    }

    changeHandler = event => {      
        const name = event.target.name;
        const value = event.target.value;      
        this.setState({[name]: value});
    }
    /*****FIM Métodos Obrigatórios */

    deleteItem(rowData) {
        this.service.delete(this, parseInt(rowData.id));
    }

    editItem(rowData) {
        window.location.replace('http://localhost:3000/#/clientecadastro/?id=' + rowData.id);
    }


    actionDataTable(rowData, column) {
        return (<div>

            <Button label="EXCLUIR" 
          className="p-button-danger p-button-raised" 
          icon="pi pi-times" 
          onClick={() => this.deleteItem(rowData)}
          style={{margin: '3px'}}/>

            <Button label="EDITAR" 
          className="p-button-normal p-button-raised" 
          icon="pi pi-pencil" 
          onClick={() => this.editItem(rowData)}
          style={{margin: '3px'}}/>
         
        </div>);
    }

 
    render() {
        return (

            

            <DataTable
                value={this.state.listaClientes}
                editMode="row"
                dataKey="id"
                onRowEditInit={this.onRowEditInit}
                onRowEditCancel={this.onRowEditCancel}>
                <Column field="name" header="name" ></Column>
                <Column field="username" header="username" ></Column>
                <Column field="phone" header="phone" ></Column>
                <Column header="Options" body={this.actionDataTable}></Column>
            </DataTable>
        );
    }
}
