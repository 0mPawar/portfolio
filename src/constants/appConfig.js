import { getAssetUrl } from "../utils/getAssetUrl";

export const APP_CONFIG = {
  name: "Om Pawar",
  websiteName: "Portfolio Website",
  copyrightYear: 2026,

  lastUpdated: "20-09-2026",
  isDataUpdated: true,
  isUnderDevelopment: false,
  isUnderMaintenance: false,
  customNote: {
    show: true,

    title: "Portfolio Data Notice",

    description:
      "The portfolio is currently functioning normally. Almost all information has been reviewed and updated.",

    notice:
      "The Resume has not been updated yet and may not reflect my latest information. It will be updated soon. Thank you for your understanding.",

    buttonText: "Continue to Portfolio",

    type: "warning",
  },
  profileImage: getAssetUrl("/images/profile/profile.jpg"),
  resume: getAssetUrl("/documents/resume.pdf"),

  github: "https://github.com/0mPawar",
  linkedin: "https://www.linkedin.com/in/ompawar17",
};
