using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using System.Text.Json;

namespace ContactUsPage
{
    public class ContactFormFunction
    {
        private readonly ILogger<ContactFormFunction> _logger;

        public ContactFormFunction(ILogger<ContactFormFunction> logger)
        {
            _logger = logger;
        }

        [Function("ContactFormFunction")]
        public async Task<HttpResponseData> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post")] HttpRequestData req)
        {
            _logger.LogInformation("Contact form received.");

            var body = await new StreamReader(req.Body).ReadToEndAsync();

            var data = JsonSerializer.Deserialize<ContactFormData>(body, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });

            _logger.LogInformation($"New message from {data.Name} ({data.Email}) - {data.Message}");

            var response = req.CreateResponse(System.Net.HttpStatusCode.OK);
            await response.WriteStringAsync("Message received successfully!");
            return response;
        }

        public class ContactFormData
        {
            public string Name { get; set; }
            public string Email { get; set; }
            public string Phone { get; set; }
            public string Message { get; set; }
        }
    }
}
