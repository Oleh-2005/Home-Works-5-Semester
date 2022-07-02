using Microsoft.EntityFrameworkCore;
using WebBackend.Data.Entities;

namespace WebBackend.Data
{
    public class AppEFContext : DbContext
    {
        public AppEFContext(DbContextOptions<AppEFContext> options)
            : base(options)
        {
        }

        public DbSet<CategoryEntity> Categories { get; set; }
    }
}
