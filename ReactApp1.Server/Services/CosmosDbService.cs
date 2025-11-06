using Microsoft.Azure.Cosmos;
using Microsoft.Extensions.Configuration;
using ReactApp1.Server.Models;

namespace ReactApp1.Server.Services
{
    public class CosmosDbService
    {
        private readonly Microsoft.Azure.Cosmos.Container _container;

        public CosmosDbService(IConfiguration config)
        {
            var cosmosClient = new CosmosClient(
                config["CosmosDb:AccountEndpoint"],
                config["CosmosDb:AccountKey"]
            );

            _container = cosmosClient.GetContainer(
                config["CosmosDb:DatabaseName"],
                config["CosmosDb:ContainerName"]
            );
        }

        public async Task AddCarAsync(Car car) =>
            await _container.CreateItemAsync(car, new PartitionKey(car.Category));

        public async Task<List<Car>> GetAllCarsAsync()
        {
            var query = _container.GetItemQueryIterator<Car>("SELECT * FROM c WHERE c.category = 'cars'");
            var results = new List<Car>();
            while (query.HasMoreResults)
            {
                var response = await query.ReadNextAsync();
                results.AddRange(response);
            }
            return results;
        }
    }
}
