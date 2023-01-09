var apiDomain = "";
switch (process.env.NODE_ENV) {
  case "development":
    apiDomain = "https://playoffbracketapi-test-rof7qukjwa-uc.a.run.app";
    break;
  case "test":
    apiDomain = "https://playoffbracketapi-test-rof7qukjwa-uc.a.run.app";
    break;
  case "production":
    apiDomain = "https://playoffbracketapi-rof7qukjwa-uc.a.run.app";
    break;
  default:
    apiDomain = "https://playoffbracketapi-test-rof7qukjwa-uc.a.run.app";
    break;
}

export default apiDomain;