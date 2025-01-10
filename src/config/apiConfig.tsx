var apiDomain = "";
switch (process.env.NODE_ENV) {
  case "development":
    // apiDomain = "http://localhost:8080";
    apiDomain = "https://playoff-bracket-api.onrender.com";
    break;
  case "test":
    apiDomain = "https://playoff-bracket-api.onrender.com";
    break;
  case "production":
    apiDomain = "https://playoff-bracket-api-prod.onrender.com";
    break;
  default:
    apiDomain = "localhost:8080";
    break;
}

export default apiDomain;