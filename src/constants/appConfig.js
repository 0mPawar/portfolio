import { getAssetUrl } from "../utils/getAssetUrl";

export const APP_CONFIG = {
  name: "Om Pawar",
  websiteName: "Portfolio Website",
  copyrightYear: 2026,

  lastUpdated: "07-09-2026",
  isDataUpdated: true,
  isUnderDevelopment: false,
  isUnderMaintenance: false,
  customNote: {
    show: true,
    title: "Portfolio Data Notice",
    description:
      "The portfolio is currently functioning normally. However, some information may not have been cross-checked or fully verified yet.",
    notice:
      "Some data may contain inaccuracies and will be reviewed and updated soon. Thank you for your understanding.",
    buttonText: "Continue to Portfolio",
    type: "warning",
  },
  profileImage: getAssetUrl("/images/profile/profile.jpg"),
  resume: getAssetUrl("/documents/resume.pdf"),

  github: "https://github.com/0mPawar",
  linkedin: "https://www.linkedin.com/in/ompawar17",
};
