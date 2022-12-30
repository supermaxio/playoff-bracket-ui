var apiDomain = ""
switch(process.env.NODE_ENV) {
  case "development":
    apiDomain = "/api";
    break;
    case "test":
      apiDomain = "https://nflplayoffbracket-test-rof7qukjwa-uc.a.run.app";
      break;
      default:
        apiDomain = "/api";
      break;
  }

export default apiDomain