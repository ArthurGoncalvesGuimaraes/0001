

using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Web.API.Interface.Inputs;
using Web.API.Models.Db;
using Web.API.SCL;

namespace WebAPI.Business
{
    public class ClienteBO
    {
        private const string host = "https://jsonplaceholder.typicode.com/users/";
        public ClienteBO() {
        
        }

        public  static ReturnObjectCL<IList<Cliente>>  GetClientesByForm(WebContext context, FormListaClientes  inputs)
        {
            try
            {
                var clientes = context.Clientes.ToList<Cliente>();

                if (inputs.email != null)
                {
                    clientes = clientes.Where(x => x.Email == inputs.email).ToList();
                }

                return new ReturnObjectCL<IList<Cliente>>()
                {
                    Sucesso = true,
                    ObjetoRetorno = clientes
                };
            }
            catch (Exception ex)
            {

                return new ReturnObjectCL<IList<Cliente>>()
                {
                    Sucesso = false,
                    Mensagem = "Erro ao listar Clientes",
                    MessageException = ex.Message,
                    MessageInnerException = ex.InnerException.Message
                };
            }
            
            //return true;
        }

        public static  ReturnObjectCL<Cliente> SaveCliente(WebContext context, Cliente cliente)
        {
            try
            {
                if (cliente.Id != 0) {
                    context.Entry<Cliente>(cliente).State = EntityState.Modified;
                }
                else {
                    context.Clientes.Add(cliente);
                } 

                context.SaveChanges();

             

                return new ReturnObjectCL<Cliente>()
                {
                    Sucesso = true,
                    ObjetoRetorno = cliente
                };
            }
            catch (Exception ex)
            {

                return new ReturnObjectCL<Cliente>()
                {
                    Sucesso = false,
                    Mensagem = "Erro ao Salvar Registro",
                    MessageException = ex.Message
                };
            }

            //return true;
        }


        public static ReturnObjectCL<bool> DeleteCliente(WebContext context, int id) {

            try
            {
                var cliente = context.Clientes.Where(x => x.Id == id).FirstOrDefault();
                context.Clientes.Remove(cliente);
                context.SaveChanges();

                return new ReturnObjectCL<bool>()
                {
                    Sucesso = true,
                    Mensagem = "Registro deletado com sucesso!"
                };
            }
            catch (Exception ex)
            {

                return new ReturnObjectCL<bool>()
                {
                    Sucesso = false,
                    Mensagem = "Erro ao Deletar Registro"
                };
            }
        }

        public static ReturnObjectCL<Cliente> GetUserDetalis(string email) {
            try
            {
               
                var method = "BundleInfo";
                var client = new RestClient(host);
                var request = new RestRequest(Method.GET);
                request.AddHeader("Accept", "application/json");
                request.AddHeader("Cache-Control", "no-cache");
                request.AddHeader("Content-Type", "application/json");
             
                IRestResponse response = client.Execute(request);
                var responeObj = response.Content;
                if (response.StatusCode == System.Net.HttpStatusCode.OK)
                {

                    

                    JArray jsonArray = JArray.Parse(response.Content);
                    IList<Cliente> clientes = jsonArray.ToObject<IList<Cliente>>();

                    var cliente = clientes.Where(x => x.Email == email).FirstOrDefault();

                    //var clienteDetalhes = 
                    return new ReturnObjectCL<Cliente>()
                    {
                        Sucesso = true,
                       ObjetoRetorno = cliente
                    };

                }
                else {
                    return new ReturnObjectCL<Cliente>()
                    {
                        Sucesso = false,
                        Mensagem = "Erro ao detalhar Cliente"
                    };

                }
                
               


                
            }
            catch (Exception ex)
            {

                return new ReturnObjectCL<Cliente>()
                    {
                        Sucesso = false,
                        Mensagem = "Erro ao detalhar Cliente"
                    };

                
            }
        }





    }



}
