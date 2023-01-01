var apiDomain = "";
switch (process.env.NODE_ENV) {
  case "development":
    apiDomain = "https://nflplayoffbracket-test-rof7qukjwa-uc.a.run.app";
    break;
  case "test":
    apiDomain = "https://nflplayoffbracket-test-rof7qukjwa-uc.a.run.app";
    break;
  default:
    apiDomain = "https://nflplayoffbracket-test-rof7qukjwa-uc.a.run.app";
    break;
}

export default apiDomain;