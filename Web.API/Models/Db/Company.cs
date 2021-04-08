using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Web.API.Models.Db
{
    [Table("Company")]
    public partial class Company
    {
        [Key]
        public int Id { get; set; }
        public string  name { get; set; }
        public string catchPhrase { get; set; }
        public string bs { get; set; }
    }
}
