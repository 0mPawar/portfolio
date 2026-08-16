// Certificates Data
const certificates = [
  {
    icon: "ri-code-box-line",
    shortTitle: "Full Stack",
    shortText: "Internship",
    tag: "Internship Program",
    title: "Full Stack Development Internship",
    description:
      "Successfully completed Full Stack Development Internship Program focused on frontend, backend, database operations and modern web workflow.",

    skills: ["HTML", "CSS", "JavaScript", "Java", "MySQL"],
    link: "assets/certificates/SCOPE_2K25.jpg",
  },

  {
    icon: "ri-cup-line",
    shortTitle: "Java",
    shortText: "Certificate",
    tag: "Programming",
    title: "Java Programming Certificate",
    description:
      "Completed Java Programming Course & Certification with strong understanding of OOP concepts and application development.",
    skills: ["Java", "OOP", "Programming"],
    link: "assets/certificates/Java.jpg",
  },

  {
    icon: "ri-bar-chart-box-line",
    shortTitle: "Python",
    shortText: "NPTEL",
    tag: "Data Science",
    title: "Python for Data Science - NPTEL",
    description:
      "Completed NPTEL Certification in Python for Data Science covering data analysis, Python fundamentals and scientific computing.",
    skills: ["Python", "Data Science", "Analysis"],

    link: "assets/certificates/Python_for_Data_Science.jpg",
  },

  {
    icon: "ri-cloud-line",
    shortTitle: "Cloud",
    shortText: "NPTEL",
    tag: "Cloud Computing",
    title: "Cloud Computing - NPTEL",
    description:
      "Completed NPTEL Certification in Cloud Computing including cloud infrastructure, deployment workflow and cloud services.",
    skills: ["Cloud", "Deployment", "Hosting"],
    link: "assets/certificates/Cloud_Computing.jpg",
  },

  {
    icon: "ri-presentation-line",
    shortTitle: "PARAS",
    shortText: "2K25",
    tag: "Project Presentation",
    title: "PARAS_2K25 Certificate",
    description:
      "College Level Project Participation & Presentation Certificate for presenting innovative technical project concepts.",
    skills: ["Presentation", "Projects", "Innovation"],
    link: "assets/certificates/PARAS_2K25.jpg",
  },

  {
    icon: "ri-lightbulb-flash-line",
    shortTitle: "TechnoVision",
    shortText: "2K25",
    tag: "Technical Exhibition",
    title: "TechnoVision_2K25 Certificate",
    description:
      "College Level Technical Project Exhibition Certificate showcasing technical development and problem-solving skills.",
    skills: ["Exhibition", "Technical", "Projects"],
    link: "assets/certificates/TechnoVision_2K25.jpg",
  },
];

// Experiences Data
const experiences = [
  {
    icon: "ri-code-box-line",
    shortTitle: "Full Stack",
    shortText: "Internship",
    tag: "Internship",
    title: "Full Stack Developer Internship",
    description:
      "Completed a Full Stack Development internship focused on responsive frontend development, backend systems, database operations, API integration and scalable web applications.",
    skills: ["HTML", "CSS", "JavaScript", "Java", "MySQL"],
    projects: ["GSTNest"],
  },

  {
    icon: "ri-code-box-line",
    shortTitle: "Present Intern",
    shortText: "Developer",
    tag: "Present Internship",
    title: "Full Stack Developer Intern (Present)",
    description:
      "Currently working on scalable web applications, frontend UI improvements, backend operations, database integration and modern development workflow.",
    skills: ["HTML", "CSS", "JavaScript"],
    projects: ["Portfolio Website"],
  },

  {
    icon: "ri-graduation-cap-line",
    shortTitle: "College",
    shortText: "Projects",
    tag: "Academic Projects",
    title: "College Projects",
    description:
      "Developed multiple academic projects focused on software development, database systems, responsive UI and problem-solving concepts during diploma engineering journey.",
    skills: ["HTML", "CSS", "JavaScript", "Python", "PHP", "MySQL"],
    projects: ["Howmeify", "Aimcrypt"],
  },

  {
    icon: "ri-user-star-line",
    shortTitle: "Personal",
    shortText: "Projects",
    tag: "Personal Work",
    title: "Personal Projects",
    description:
      "Built personal projects to improve Full Stack Development, Android Development, UI/UX design and real-world software development experience.",
    skills: ["Kotlin", "Compose"],
    projects: ["Unit Calculator", "Digital Shop"],
  },

  {
    icon: "ri-briefcase-line",
    shortTitle: "Full Stack",
    shortText: "Experience",
    tag: "Real World Experience",
    title: "Internship Project Experience",
    description:
      "Worked on real-world internship projects involving frontend systems, backend integration, REST APIs, database handling and collaborative development workflow.",
    skills: ["HTML", "CSS", "JavaScript", "Java", "MySQL"],
    projects: ["GSTNest", "Submission Form", "Portfolio Website"],
  },
];

// Education Data
const education = [
  {
    shortTitle: "SSC",
    title: "Secondary School Education (10th)",
    institute: "Rayat Shikshan Sanstha",
    board: "Maharashtra State Board",
    duration: "Passed in 2023",
    description:
      "Built strong academic foundation with focus on mathematics, science and computer fundamentals.",
    icon: "ri-school-line",
  },

  {
    shortTitle: "Diploma",
    title: "Diploma in Computer Engineering",
    institute: "Parikrama Polytechnic Kashti",
    board: "Maharashtra State Board of Technical Education (MSBTE)",
    duration: "2023 - 2026",
    description:
      "Focused on software development, database systems, web technologies, programming concepts and practical engineering skills.",
    icon: "ri-computer-line",
  },

  {
    shortTitle: "B.Tech",
    title: "Bachelor of Technology / Engineering",
    institute:
      "Artificial Intelligence & Machine Learning / Computer Science Engineering",
    board: "Future Academic Goal",
    duration: "2026 - 2029",
    description:
      "Planning to build strong knowledge in Artificial Intelligence, Machine Learning, Full Stack Development and scalable software systems.",
    icon: "ri-robot-line",
  },
];

// Projects Data
const projects = [
  {
    title: "Howmeify",
    type: "Full Stack Web Application",
    description:
      "House Rental Management System designed for property management, tenant records, rental workflow and payment operations.",
    role: "Full Stack Developer",
    status: "Localhost Project",
    platform: "Web Application",
    year: "2026",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Property Management",
      "Tenant Records",
      "Rental Workflow",
      "Payment Management",
    ],
  },

  {
    title: "AimCrypt",
    type: "Security Web App",
    description:
      "Steganography based security website with responsive frontend and modern design.",
    role: "Frontend Developer",
    status: "GitHub Available",
    platform: "Web Application",
    year: "2026",
    tech: ["HTML", "CSS", "JavaScript", "Python"],
    features: [
      "Responsive UI",
      "Frontend Animation",
      "Secure Workflow",
      "Interactive Layout",
    ],
  },

  {
    title: "GSTNest",
    type: "Billing System",
    description:
      "GST invoice generator and customer billing management system.",
    role: "Full Stack Developer",
    status: "Under Development",
    platform: "Web Application",
    year: "2025",
    tech: ["HTML", "CSS", "JavaScript", "Java", "MySQL"],
    features: [
      "GST Calculator",
      "Invoice Generator",
      "Billing Management",
      "Database Integration",
    ],
  },

  {
    title: "Unit Calculator",
    type: "Android App",
    description:
      "Android based unit calculator built using Kotlin and Jetpack Compose.",
    role: "Android Developer",
    status: "Localhost Project",
    platform: "Android",
    year: "2025",
    tech: ["Kotlin", "Jetpack Compose"],
    features: [
      "Unit Conversion",
      "Modern UI",
      "Responsive Layout",
      "Smooth Experience",
    ],
  },

  {
    title: "Digital Shop",
    type: "Shopping Application",
    description:
      "Android shopping application with modern mobile shopping experience.",
    role: "Android Developer",
    status: "In Progress",
    platform: "Android",
    year: "2025",
    tech: ["Kotlin", "Jetpack Compose"],
    features: [
      "Shopping UI",
      "Product Browsing",
      "Mobile Experience",
      "Modern Components",
    ],
  },
];
