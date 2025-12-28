var apiDomain = "";
switch (process.env.NODE_ENV) {
  case "development":
    // apiDomain = "https://playoff-bracket-api-u1qy.onrender.com";
    apiDomain = "https://playoff-bracket-api-dev-uhuyr.ondigitalocean.app";
    // apiDomain = "http://localhost:8080";
    // apiDomain = "https://playoff-bracket-api.onrender.com";
    break;
  case "test":
    apiDomain = "https://playoff-bracket-api-dev-uhuyr.ondigitalocean.app";
    break;
  case "production":
    apiDomain = "https://playoff-bracket-api-u1qy.onrender.com";
    break;
  default:
    apiDomain = "localhost:8080";
    break;
}

export default apiDomain;