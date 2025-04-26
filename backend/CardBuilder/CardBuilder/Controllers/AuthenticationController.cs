using CardBuilder.BLL.Services.JwtService.Interfaces;
using CardBuilder.DAL.Entities;
using CardBuilder.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace CardBuilder.Controllers
{
    [Route("auth")]
    [ApiController]
    [AllowAnonymous]
    public class AuthenticationController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly IJwtService _jwtService;

        public AuthenticationController(IJwtService jwtService, UserManager<User> userManager)
        {
            _jwtService = jwtService;
            _userManager = userManager;
        }

        [HttpPost("login")]
        public async Task<IActionResult> LoginAsync([FromBody] AuthenticationViewModel login)
        {
            var user = await _userManager.FindByNameAsync(login.Username);
            if (user == null || !await _userManager.CheckPasswordAsync(user, login.Password))
                return BadRequest("Wrong username or password");

            var tokenString = _jwtService.GetToken(user.Id, user.UserName);

            return Ok(new { token = tokenString });
        }

        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<IActionResult> RegisterAsync([FromBody] AuthenticationViewModel model)
        {
            var user = await _userManager.FindByNameAsync(model.Username);

            if (user != null)
                return BadRequest("User exists");

            var newUser = new User { UserName = model.Username };
            var result = await _userManager.CreateAsync(newUser, model.Password);

            if (!result.Succeeded)
                return BadRequest("Smth went wrong");

            return Ok("User was added");
        }
    }
}
