using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Web.API.Models.Db
{
    [Table("Cliente")]
    public partial class Cliente
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(100)]
        [Required]
        public string Email { get; set; }

        [MaxLength(50)]
        public string name{ get; set; }
        [MaxLength(100)]
        public string username { get; set; }
        [MaxLength(40)]
        public  string  phone { get; set; }
        [MaxLength(150)]

        public string website { get; set; }
        public Address address { get; set; }
    
        public Company company { get; set; }
    


    }
}
