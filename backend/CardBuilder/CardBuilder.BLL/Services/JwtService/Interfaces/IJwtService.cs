namespace CardBuilder.BLL.Services.JwtService.Interfaces;

public interface IJwtService
{
    string GetToken(int id, string username);
}