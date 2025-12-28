const buildEnv = process.env.REACT_APP_BUILD_ENV || process.env.NODE_ENV;

let apiDomain = "";
switch (buildEnv) {
  case "development":
    apiDomain = "https://playoff-bracket-api-dev-uhuyr.ondigitalocean.app";
    break;
  case "test":
    apiDomain = "https://playoff-bracket-api-dev-uhuyr.ondigitalocean.app";
    break;
  case "production":
    apiDomain = "https://playoff-bracket-api-u1qy.onrender.com";
    break;
  default:
    apiDomain = "http://localhost:8080";
    break;
}

export default apiDomain;