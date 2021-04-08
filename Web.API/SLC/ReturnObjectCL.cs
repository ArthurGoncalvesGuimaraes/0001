using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Web.API.SCL
{
  
        public class ReturnObjectCL<T>
        {
            public bool Sucesso { get; set; }
            public string Mensagem { get; set; }
            public T ObjetoRetorno { get; set; }
            public int Totalizador { get; set; }
            public TimeSpan TempoProcessamento { get; set; }
            public string MessageException { get; set; }
            public string MessageInnerException { get; set; }
        }
        public struct MensagensRetorno
        {
            public const string SucessoDadosSalvos = "Dados salvos com sucesso";
            public const string SucessoDadosAlterados = "Dados alterados com sucesso";
            public const string SucessoDadosRemovidos = "Dados removidos com sucesso";
            public const string ErroDadosSalvos = "Erro ao salvar dados ";
            public const string ErroValidacaoDados = "Erro ao salvar (Erro de validação dos dados) ";
            public const string ErroRegistroDuplicado = "Erro ao salvar (Registro já existente) ";
            public const string ErroRegistroPossuiVinculo = "Erro efetuar operação, pois o registro está sendo utilizado";
            public const string ErroDadosAlterados = "Erro ao alterar dados";
            public const string ErroDadosRemovidos = "Erro ao remover dados";
            public const string ErroDadosConsulta = "Erro ao consultar dados";
            public const string ErroDadosConsultaSemRegistro = "Consulta sem registros";

        }
    
}
