using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CardBuilder.BLL.DTOs;
using CardBuilder.DAL.Entities;

namespace CardBuilder.BLL.Services.OrderService
{
    public interface IOrderService
    {
        Task<IEnumerable<OrderDTO>> GetAllOrdersAsync();
        Task<IEnumerable<OrderDTO>> GetAllUserOrdersAsync(int userId);
        Task<OrderDTO?> GetOrderByIdAsync(int id);
        Task CreateOrderAsync(OrderDTO newOrder);
        Task<bool> DeleteOrderAsync(int id);
    }
}
