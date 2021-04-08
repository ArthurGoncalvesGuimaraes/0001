using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Web.API.Models.Db
{
    [Table("Geolocation")]
    public partial class Geolocation
    {
        [Key]
        public int id { get; set; }
        public int idAddress { get; set; }
        public string lat { get; set; }
        public string lng { get; set; }

    }
}
