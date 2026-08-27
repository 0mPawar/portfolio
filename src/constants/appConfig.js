import { getAssetUrl } from "../utils/getAssetUrl";

export const APP_CONFIG = {
  name: "Om Pawar",
  websiteName: "Portfolio Website",
  copyrightYear: 2026,

  lastUpdated: "2026-08-27",

  isDataUpdated: false,
  isUnderDevelopment: false,
  isUnderMaintenance: false,

  profileImage: getAssetUrl("/images/profile/profile.jpg"),
  resume: getAssetUrl("/documents/resume.pdf"),

  github: "https://github.com/0mPawar",
  linkedin: "https://www.linkedin.com/in/ompawar17",
};
