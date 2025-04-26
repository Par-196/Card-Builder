using CardBuilder.DAL.Entities.Common;
using CardBuilder.DAL.Entities.Enums;

namespace CardBuilder.DAL.Entities;

public class Order : IDbEntity<int>
{
    public int Id { get; set; }

    public GoodType Item { get; set; }
    public OrderStatus Status { get; set; }

    public string Description { get; set; } = null!;

    public int Amount { get; set; }
    public decimal TotalPrice { get; set; }

    public DateTime CreationDate { get; set; } = DateTime.UtcNow;

    public int UserId { get; set; }
    public User User { get; set; }
}