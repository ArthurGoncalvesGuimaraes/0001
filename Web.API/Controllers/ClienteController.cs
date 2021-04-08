using Web.API.Models;
using Web.API.Models.Db;
using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Web.API.Interface.Inputs;

using System.Collections.Generic;

using Web.API.SCL;
using WebAPI.Business;

namespace Web.API.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private WebContext _context = null;

        [HttpGet]
        public ReturnObjectCL<IList<Cliente>> Get()
        {
            try
            {
                using (_context = new WebContext())
                {
                    var collection = _context.Clientes;
                    return new ReturnObjectCL<IList<Cliente>>()
                    {
                        Sucesso = true,
                        ObjetoRetorno = collection?.ToList()
                    };
                }
            }
            catch (Exception ex)
            {
                return new ReturnObjectCL<IList<Cliente>>()
                {
                    Sucesso = false,
                    Mensagem = MensagensRetorno.ErroDadosConsulta,
                    MessageException = ex.Message,
                    MessageInnerException = ex.InnerException?.Message

                };
            }
        }


        [HttpPost("GetAllByForm")]
        public ReturnObjectCL<IList<Cliente>> GetAllByForm(FormListaClientes form)
        {
            return ClienteBO.GetClientesByForm(_context, form);
        }

        [HttpPut]
        public ReturnObjectCL<Cliente> Put(Cliente cliente)
        {
            return ClienteBO.SaveCliente(_context, cliente);
        }

        [HttpPost]
        public ReturnObjectCL<Cliente> Post(Cliente cliente)
        {
            return ClienteBO.SaveCliente(_context, cliente);
        }


        [HttpPost("Delete")]
        public ReturnObjectCL<bool> Delete([FromQuery]int id)
        {
            return ClienteBO.DeleteCliente(_context, id);
        }

        [HttpPost("GetUser")]
        public ReturnObjectCL<Cliente> GetUser(FormListaClientes form)
        {
           
           //email = "Sincere@april.biz";
            return ClienteBO.GetUserDetalis(form.email);
        }
        

        //    //End Point - Cadastrar, ListarByFilter ,  Editar, Excluir 
        //    //End Point P/ Carregar informações do usuário By CPF
        //}
    }
}