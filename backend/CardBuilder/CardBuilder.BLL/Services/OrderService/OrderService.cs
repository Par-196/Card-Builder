using CardBuilder.BLL.DTOs;
using CardBuilder.BLL.Extensions;
using CardBuilder.DAL.Context;
using Microsoft.EntityFrameworkCore;

namespace CardBuilder.BLL.Services.OrderService
{
    public class OrderService : IOrderService
    {
        private readonly ApplicationContext _context;

        public OrderService(ApplicationContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<OrderDTO>> GetAllOrdersAsync()
        {
            return await _context.Orders.Select(x=> x.ToDTO()).ToListAsync();
        }

        public async Task<IEnumerable<OrderDTO>> GetAllUserOrdersAsync(int userId)
        {
            return await _context.Orders.Where(x => x.UserId == userId).Select(x => x.ToDTO()).ToListAsync();
        }

        public async Task<OrderDTO?> GetOrderByIdAsync(int id)
        {
            var order = await _context.Orders.FindAsync(id);
            return order?.ToDTO();
        }

        public async Task CreateOrderAsync(OrderDTO newOrder)
        {
            _context.Orders.Add(newOrder.ToEntity());
            await _context.SaveChangesAsync();
        }

        public async Task<bool> DeleteOrderAsync(int id)
        {
            var order = await _context.Orders.FindAsync(id);
            if (order == null)
                return false;

            _context.Orders.Remove(order);
            await _context.SaveChangesAsync();
            return true;
        }

    }
}
    