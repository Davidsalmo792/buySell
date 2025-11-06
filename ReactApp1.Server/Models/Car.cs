using Newtonsoft.Json;

namespace ReactApp1.Server.Models
{
    public class Car
    {
        [JsonProperty("id")]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public string Title { get; set; } = default!;
        public string Description { get; set; } = default!;
        public decimal Price { get; set; }
        public int Year { get; set; }

        [JsonProperty("category")]
        public string Category => "cars";

        public string ImageUrl { get; set; } = default!;
        public DateTime UploadDate { get; set; } = DateTime.UtcNow;
    }
}
