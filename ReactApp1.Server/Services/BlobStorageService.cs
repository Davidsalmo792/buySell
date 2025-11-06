using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Microsoft.Extensions.Configuration;

namespace ReactApp1.Server.Services
{
    public class BlobStorageService
    {
        private readonly BlobContainerClient _containerClient;

        public BlobStorageService(IConfiguration config)
        {
            var connectionString = config["BlobStorage:ConnectionString"];
            var containerName = config["BlobStorage:ContainerName"];
            var blobServiceClient = new BlobServiceClient(connectionString);
            _containerClient = blobServiceClient.GetBlobContainerClient(containerName);
        }

        public async Task<string> UploadAsync(IFormFile file)
        {
            await _containerClient.CreateIfNotExistsAsync();

            var blobName = $"{Guid.NewGuid()}-{file.FileName}";
            var blobClient = _containerClient.GetBlobClient(blobName);

            var headers = new BlobHttpHeaders
            {
                ContentType = file.ContentType
            };

            using (var stream = file.OpenReadStream())
            {
                await blobClient.UploadAsync(stream, new BlobUploadOptions
                {
                    HttpHeaders = headers
                });
            }

            return blobClient.Uri.ToString();
        }
    }
}
