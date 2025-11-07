using ReactApp1.Server.Services;

var builder = WebApplication.CreateBuilder(args);

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";


builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        policy =>
        {
            policy.WithOrigins(
                "https://blue-pebble-0baf4df03.3.azurestaticapps.net", //  deployed frontend
                "https://localhost:61253"                            //  local Vite frontend
            )
            .AllowAnyHeader()
            .AllowAnyMethod();
        });
});

builder.Services.AddSingleton<CosmosDbService>();
builder.Services.AddSingleton<BlobStorageService>();

builder.Services.AddControllers();
builder.Services.AddOpenApi();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();
