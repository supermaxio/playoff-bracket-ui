var apiDomain = "";
switch (process.env.NODE_ENV) {
  case "development":
    //apiDomain = "http://localhost:8080";
    apiDomain = "https://playoff-brackets-api-f6d44ce7cf4f.herokuapp.com";
    break;
  case "test":
    apiDomain = "https://playoff-brackets-api-f6d44ce7cf4f.herokuapp.com";
    break;
  case "production":
    apiDomain = "https://playoff-brackets-api-prod-fdd0929ebae6.herokuapp.com";
    break;
  default:
    apiDomain = "localhost:8080";
    break;
}

export default apiDomain;