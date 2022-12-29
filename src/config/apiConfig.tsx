var apiDomain = ""
switch(process.env.NODE_ENV) {
  case "development":
    apiDomain = "";
    break;
    case "test":
      apiDomain = "https://nflplayoffbracket-test-rof7qukjwa-uc.a.run.app";
      break;
      default:
        apiDomain = "";
      break;
  }

export default apiDomain