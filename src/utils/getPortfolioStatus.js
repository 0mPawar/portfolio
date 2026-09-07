import { APP_CONFIG } from "../constants/appConfig";
import portfolioStatus from "../data/portfolioStatus.json";

function getPortfolioStatus(
  config = APP_CONFIG,
  statusConfigurations = portfolioStatus,
) {
  if (config.customNote?.show) {
    return config.customNote;
  }

  const statusKey = [
    config.isDataUpdated,
    config.isUnderDevelopment,
    config.isUnderMaintenance,
  ]
    .map((value) => (value ? "1" : "0"))
    .join("");

  return statusConfigurations[statusKey];
}

export default getPortfolioStatus;
