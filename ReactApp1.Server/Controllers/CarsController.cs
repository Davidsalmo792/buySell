using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Models;
using ReactApp1.Server.Services;

namespace ReactApp1.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CarsController : ControllerBase
    {
        private readonly CosmosDbService _cosmosService;
        private readonly BlobStorageService _blobService;

        public CarsController(CosmosDbService cosmosService, BlobStorageService blobService)
        {
            _cosmosService = cosmosService;
            _blobService = blobService;
        }

        [HttpPost]
        public async Task<IActionResult> UploadCar([FromForm] string title, [FromForm] string description,
            [FromForm] decimal price, [FromForm] int year, [FromForm] IFormFile image)
        {
            var imageUrl = await _blobService.UploadAsync(image);
            var car = new Car
            {
                Id = Guid.NewGuid().ToString(),
                Title = title,
                Description = description,
                Price = price,
                Year = year,
                ImageUrl = imageUrl,
                UploadDate = DateTime.UtcNow
            };
            await _cosmosService.AddCarAsync(car);
            return Ok(car);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCars()
        {
            var cars = await _cosmosService.GetAllCarsAsync();
            return Ok(cars);
        }
    }
}
