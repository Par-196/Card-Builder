using System.Security.Claims;
using CardBuilder.BLL.DTOs;
using CardBuilder.BLL.Services.OrderService;
using CardBuilder.DAL.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CardBuilder.Controllers
{
    [Route("orders")]
    [ApiController]
    [Authorize]
    public class OrdersController : ControllerBase
    {   
        private readonly IOrderService _orderService;
        public OrdersController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpGet]
        public async Task<IActionResult> GetUserOrders()
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            var result = await _orderService.GetAllUserOrdersAsync(int.Parse(userIdClaim));

            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetOrder(int id)
        {
            var order = await _orderService.GetOrderByIdAsync(id);
            if (order == null)
                return NotFound();

            return Ok(order);
        }
            
        [HttpPost]
        public async Task<IActionResult> CreateOrder([FromBody] OrderDTO order)
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            order.UserId = int.Parse(userIdClaim);

            await _orderService.CreateOrderAsync(order);
            return Ok();
        }
    }
}
