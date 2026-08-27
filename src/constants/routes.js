export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  
  PROJECTS: "/projects",
  PROJECT_DETAILS: "/projects/:slug",

  SKILLS: "/skills",
  TECHNOLOGIES: "/technologies",

  EXPERIENCE: "/experience",
  EXPERIENCE_DETAILS: "/experience/:id",

  EDUCATION: "/education",
  EDUCATION_DETAILS: "/education/:id",

  CERTIFICATES: "/certificates",
  ACHIEVEMENTS: "/achievements",
  COMPETITIONS: "/competitions",

  GITHUB: "/github",
  CONTACT: "/contact",

  NOT_FOUND: "/not-found",
  ICON_SHOWCASE: "/icons",
  CATCH_ALL: "*",
};

export const getProjectRoute = (slug) => `/projects/${slug}`;

export const getExperienceRoute = (id) => `/experience/${id}`;

export const getEducationRoute = (id) => `/education/${id}`;
