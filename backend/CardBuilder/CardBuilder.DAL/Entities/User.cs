using CardBuilder.DAL.Entities.Common;
using Microsoft.AspNetCore.Identity;

namespace CardBuilder.DAL.Entities;

public class User : IdentityUser<int>, IDbEntity<int>
{
    public string FirstName { get; set; }
    public string LastName { get; set; }

    public ICollection<Order> Orders { get; set; } = [];
}