using CardBuilder.DAL.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CardBuilder.DAL.Context;

public class ApplicationContext : IdentityDbContext<User, IdentityRole<int>, int>
{
    public ApplicationContext()
    {

    }
    public ApplicationContext(DbContextOptions<ApplicationContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }

    public DbSet<User> Users { get; set; } = null!;
    public DbSet<Order> Orders { get; set; } = null!;
}