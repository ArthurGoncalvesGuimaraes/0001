using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Web.API.Models.Db
{
    [Table("Address")]
    public partial class Address
    {
        [Key]
        public int Id { get; set; }

        public int IdCliente { get; set; }

        public string street { get; set; }
        public string suite { get; set; }
        public string city { get; set; }
        public string zipcode { get; set; }
        public Geolocation geo{ get; set; }

      

    }
}
