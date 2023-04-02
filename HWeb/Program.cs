var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

//builder.Services.AddRazorPages().AddRazorRuntimeCompilation();

//app.MapGet("/", () => "Hello World111!");

app.Run("http://localhost:3000");
