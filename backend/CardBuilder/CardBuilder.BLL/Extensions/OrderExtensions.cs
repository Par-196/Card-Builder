using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CardBuilder.BLL.DTOs;
using CardBuilder.DAL.Entities;

namespace CardBuilder.BLL.Extensions
{
    public static class OrderExtensions
    {
        public static OrderDTO ToDTO(this Order order)
        {
            if (order == null) return null!;

            return new OrderDTO
            {
                Id = order.Id,
                Item = order.Item,
                Status = order.Status,
                Description = order.Description,
                Amount = order.Amount,
                TotalPrice = order.TotalPrice,
                CreationDate = order.CreationDate,
                UserId = order.UserId
            };
        }

        public static Order ToEntity(this OrderDTO dto)
        {
            if (dto == null) return null!;

            return new Order
            {
                Id = dto.Id,
                Item = dto.Item,
                Status = dto.Status,
                Description = dto.Description,
                Amount = dto.Amount,
                TotalPrice = dto.TotalPrice,
                CreationDate = dto.CreationDate,
                UserId = dto.UserId.Value
            };
        }
    }
}
