using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebBackend.Data.Entities
{
    [Table("tblCategories")]
    public class CategoryEntity
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(150)]
        public string Name { get; set; }

        [StringLength(100)]
        public string Image { get; set; }
    }
}
