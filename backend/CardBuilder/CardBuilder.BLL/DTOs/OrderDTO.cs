using CardBuilder.DAL.Entities.Enums;

namespace CardBuilder.BLL.DTOs
{
    public class OrderDTO
    {
        public int Id { get; set; }

        public GoodType Item { get; set; }
        public OrderStatus Status { get; set; }

        public string? Description { get; set; }

        public int Amount { get; set; }
        public decimal TotalPrice { get; set; }

        public DateTime CreationDate { get; set; } = DateTime.UtcNow;

        public int? UserId { get; set; }
    }
}
