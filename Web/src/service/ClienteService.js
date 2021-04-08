import { ApiClient } from '../AxiosInstance';
import { ApiExternalClient } from '../AxiosExternalInstance';

let client = new ApiClient();
let externalClient = new ApiExternalClient();

export class ClienteService {

    get(_this, id) {
        return client.get('/Cliente/' + id)
            .then(res => res.data)
            .then(data => {
                _this.setState({ id: data.id });
                return data;
            }).catch(error => {
                if (error.response === undefined) {
                    _this.showError("Erro", "Não foi possível consultar.")
                } else {
                    _this.showError("Erro", "Não foi possível consultar. Detalhes: " + error.response.data.message)
                }
            });
    }

    getAllByForm(_this) {
        return client.post('/Cliente/GetAllByForm', _this.state.form)
            .then(res => res.data)
            .then(data => {
                _this.setState.listaClientes(data.objetoRetorno);

                return data;
            }).catch(error => {
                if (error.response === undefined) {
                    _this.showError("Erro", "Não foi possível listar.")
                } else {
                    _this.showError("Erro", "Não foi possível listar. Detalhes: " + error.response)
                }
            });
    }

    post(_this) {
        return client.post('/Cliente', _this.state)
            .then(res => res.data)
            .then(data => {
                _this.consultar();
                return data;
            }).catch(error => {
                if (error.response === undefined) {
                    _this.showError("Erro", "Não foi possível salvar.")
                } else {
                    console.log(error);
                    _this.showError("Erro", "Não foi possível salvar. Detalhes: " + Object.values(error.response.data))
                }
            });
    }

    put(_this) {
        return client.put('/Cliente', _this.state)
            .then(res => res.data)
            .then(data => {
                _this.consultar();
                return data;
            }).catch(error => {
                if (error.response === undefined) {
                    _this.showError("Erro", "Não foi possível salvar.")
                } else {
                    console.log(error);
                    _this.showError("Erro", "Não foi possível salvar. Detalhes: " + Object.values(error.response.data))
                }
            });
    }

    delete(_this, id) {
        return client.post('/Cliente/Delete/',+ id)
            .then(res => res.data)
            .then(data => {
                _this.getAllByForm(_this.state.form);
                return data;
            }).catch(error => {
                if (error.response === undefined) {
                    _this.showError("Erro", "Não foi possível Excluir.")
                } else {
                    console.log(error);
                    _this.showError("Erro", "Não foi possível Excluir. Detalhes: " + Object.values(error.response.data))
                }
            });
    }


    getUser(_this, email) {
        return client.post('/Cliente/GetUser', { email: email} )
            .then(res => res.data)
            .then(data => {
                _this.setState(data.objetoRetorno);
               
                return data;
            }).catch(error => {
                if (error.response === undefined) {
                    _this.showError("Erro", "Não foi possível consultar.")
                } else {
                    _this.showError("Erro", "Não foi possível consultar. Detalhes: " + error.response.data.message)
                }
            });
    }
}