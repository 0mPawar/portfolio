import {
  Server,
  ServerCog,
  Code2,
  CodeXml,
  Monitor,
  PanelsTopLeft,
  Database,
  Network,
  ShieldCheck,
  Smartphone,
  GitBranch,
  Palette,
  Layout,
  Box,
  // Github,
  House,
  Home,
  User,
  UserRound,
  Folder,
  FolderKanban,
  Brain,
  Cpu,
  Briefcase,
  BriefcaseBusiness,
  GraduationCap,
  Award,
  Trophy,
  Medal,
  Mail,
  Calendar,
  Clock,
  MapPin,
  Building2,
  School,
  Globe,
  Phone,
  ExternalLink,
  Eye,
  ArrowLeft,
  ArrowRight,
  ListChecks,
  Layers,
  Images,
  CircleCheck,
  CircleX,
  TriangleAlert,
  Info,
  X,
  Menu,
  Search,
  Download,
  ChevronDown,
  ChevronUp,
  Link,
  Sparkles,
  Terminal,
  Wrench,
  Settings,
  FileCode2,
  Rocket,
  BadgeCheck,
  CircleUser,
  Laptop,
  Blocks,
  Workflow,
  Plug,
  LockKeyhole,
  KeyRound,
  Shield,
  Cloud,
  FileText,
  BookOpen,
  Contact,
  Send,
  // Instagram,
  // Linkedin,
  // Youtube,
  MessageCircle,
  AtSign,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaDiscord,
  FaXTwitter,
  FaGitAlt,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaAndroid,
} from "react-icons/fa6";

import {
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiJavascript,
  SiGit,
  SiDocker,
  // SiLinkedin,
  SiInstagram,
  SiYoutube,
  SiDiscord,
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiFirebase,
  SiKotlin,
  SiPython,
  // SiJava,
  SiC,
  SiCplusplus,
  SiHtml5,
  // SiCss3,
  SiPostman,
  // SiVisualstudiocode,
  SiAndroidstudio,
} from "react-icons/si";

import PageHeader from "../../components/common/PageHeader";

/* -------------------------------------------------------------------------- */
/*                                 COMPONENTS                                 */
/* -------------------------------------------------------------------------- */

function ShowcaseSection({ title, description, children }) {
  return (
    <section className="mt-20">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          Icon Category
        </p>

        <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          {title}
        </h2>

        <p className="mt-2 max-w-3xl text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>

      {children}
    </section>
  );
}

function IconVariant({ title, children }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]">
      <h4 className="mb-5 text-sm font-semibold text-gray-900 dark:text-white">
        {title}
      </h4>

      <div className="flex flex-wrap items-center justify-center gap-5">
        {children}
      </div>
    </div>
  );
}

function IconBox({ label, children, variant = "square" }) {
  const variants = {
    plain: "bg-transparent",
    square: "rounded-xl bg-gray-100 dark:bg-white/5",
    rounded: "rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400",
    circle: "rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400",
    dark: "rounded-2xl bg-gray-900 text-white dark:bg-white dark:text-gray-900",
  };

  return (
    <div className="flex min-w-[90px] flex-col items-center">
      <div
        className={`flex h-16 w-16 items-center justify-center ${variants[variant]}`}
      >
        {children}
      </div>

      <span className="mt-2 max-w-[100px] truncate text-center text-[10px] text-gray-500 dark:text-gray-400">
        {label}
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                           ICON COMPARISON DATA                             */
/* -------------------------------------------------------------------------- */

const comparisons = [
  {
    name: "GitHub",
    description: "Developer platform and source code hosting.",
    lucide: [
      // { name: "Github", icon: Github },
      { name: "Code2", icon: Code2 },
      { name: "Terminal", icon: Terminal },
    ],
    brands: [
      { name: "FaGithub", icon: FaGithub },
    ],
    devicons: ["devicon-github-original", "devicon-github-original-wordmark"],
  },

  {
    name: "LinkedIn",
    description: "Professional social platform.",
    lucide: [
      // { name: "Linkedin", icon: Linkedin },
      { name: "Contact", icon: Contact },
      { name: "Briefcase", icon: Briefcase },
    ],
    brands: [
      { name: "FaLinkedin", icon: FaLinkedin },
      // { name: "SiLinkedin", icon: SiLinkedin },
    ],
    devicons: [],
  },

  {
    name: "Instagram",
    description: "Social media platform.",
    lucide: [
      // { name: "Instagram", icon: Instagram },
      { name: "Images", icon: Images },
      { name: "Camera alternative", icon: Eye },
    ],
    brands: [
      { name: "FaInstagram", icon: FaInstagram },
      { name: "SiInstagram", icon: SiInstagram },
    ],
    devicons: [],
  },

  {
    name: "YouTube",
    description: "Video and content platform.",
    lucide: [
      // { name: "Youtube", icon: Youtube },
      { name: "Images", icon: Images },
      { name: "ExternalLink", icon: ExternalLink },
    ],
    brands: [
      { name: "FaYoutube", icon: FaYoutube },
      { name: "SiYoutube", icon: SiYoutube },
    ],
    devicons: [],
  },

  {
    name: "React",
    description: "Frontend JavaScript library.",
    lucide: [
      { name: "Blocks", icon: Blocks },
      { name: "Cpu", icon: Cpu },
      { name: "Workflow", icon: Workflow },
    ],
    brands: [
      { name: "FaReact", icon: FaReact },
      { name: "SiReact", icon: SiReact },
    ],
    devicons: ["devicon-react-original", "devicon-react-original-wordmark"],
  },

  {
    name: "Node.js",
    description: "JavaScript backend runtime.",
    lucide: [
      { name: "Server", icon: Server },
      { name: "ServerCog", icon: ServerCog },
      { name: "Terminal", icon: Terminal },
    ],
    brands: [
      { name: "FaNodeJs", icon: FaNodeJs },
      { name: "SiNodedotjs", icon: SiNodedotjs },
    ],
    devicons: ["devicon-nodejs-plain", "devicon-nodejs-plain-wordmark"],
  },

  {
    name: "MySQL",
    description: "Relational database.",
    lucide: [
      { name: "Database", icon: Database },
      { name: "Server", icon: Server },
      { name: "Layers", icon: Layers },
    ],
    brands: [{ name: "SiMysql", icon: SiMysql }],
    devicons: [
      "devicon-mysql-plain",
      "devicon-mysql-original",
      "devicon-mysql-plain-wordmark",
    ],
  },

  {
    name: "JavaScript",
    description: "Programming language.",
    lucide: [
      { name: "Code2", icon: Code2 },
      { name: "CodeXml", icon: CodeXml },
      { name: "FileCode2", icon: FileCode2 },
    ],
    brands: [{ name: "SiJavascript", icon: SiJavascript }],
    devicons: [
      "devicon-javascript-plain",
      "devicon-javascript-original",
      "devicon-javascript-plain-wordmark",
    ],
  },

  {
    name: "Git",
    description: "Version control system.",
    lucide: [
      { name: "GitBranch", icon: GitBranch },
      { name: "Workflow", icon: Workflow },
      { name: "Network", icon: Network },
    ],
    brands: [
      { name: "FaGitAlt", icon: FaGitAlt },
      { name: "SiGit", icon: SiGit },
    ],
    devicons: [
      "devicon-git-plain",
      "devicon-git-original",
      "devicon-git-plain-wordmark",
    ],
  },

  {
    name: "Docker",
    description: "Containerization platform.",
    lucide: [
      { name: "Box", icon: Box },
      { name: "Server", icon: Server },
      { name: "Cloud", icon: Cloud },
    ],
    brands: [
      { name: "FaDocker", icon: FaDocker },
      { name: "SiDocker", icon: SiDocker },
    ],
    devicons: [
      "devicon-docker-plain",
      "devicon-docker-original",
      "devicon-docker-plain-wordmark",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                               SKILL ICONS                                  */
/* -------------------------------------------------------------------------- */

const skillIcons = [
  {
    name: "Backend Development",
    icons: [
      { name: "Server", icon: Server },
      { name: "ServerCog", icon: ServerCog },
      { name: "Terminal", icon: Terminal },
    ],
  },

  {
    name: "Frontend Development",
    icons: [
      { name: "Monitor", icon: Monitor },
      { name: "PanelsTopLeft", icon: PanelsTopLeft },
      { name: "Layout", icon: Layout },
    ],
  },

  {
    name: "Database Design",
    icons: [
      { name: "Database", icon: Database },
      { name: "Layers", icon: Layers },
      { name: "Server", icon: Server },
    ],
  },

  {
    name: "API Development",
    icons: [
      { name: "Network", icon: Network },
      { name: "Plug", icon: Plug },
      { name: "Workflow", icon: Workflow },
    ],
  },

  {
    name: "Authentication",
    icons: [
      { name: "ShieldCheck", icon: ShieldCheck },
      { name: "LockKeyhole", icon: LockKeyhole },
      { name: "KeyRound", icon: KeyRound },
    ],
  },

  {
    name: "Android Development",
    icons: [
      { name: "Smartphone", icon: Smartphone },
      { name: "Laptop", icon: Laptop },
      { name: "Cpu", icon: Cpu },
    ],
  },

  {
    name: "Version Control",
    icons: [
      { name: "GitBranch", icon: GitBranch },
      { name: "Workflow", icon: Workflow },
      { name: "Network", icon: Network },
    ],
  },

  {
    name: "UI Development",
    icons: [
      { name: "Palette", icon: Palette },
      { name: "Layout", icon: Layout },
      { name: "PanelsTopLeft", icon: PanelsTopLeft },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                            TECHNOLOGY ICONS                                */
/* -------------------------------------------------------------------------- */

const technologies = [
  {
    name: "C",
    brand: SiC,
    devicons: ["devicon-c-plain", "devicon-c-original"],
  },
  {
    name: "C++",
    brand: SiCplusplus,
    devicons: ["devicon-cplusplus-plain", "devicon-cplusplus-original"],
  },
  {
    name: "Java",
    // brand: SiJava,
    fontAwesome: FaJava,
    devicons: ["devicon-java-plain", "devicon-java-original"],
  },
  {
    name: "Kotlin",
    brand: SiKotlin,
    devicons: ["devicon-kotlin-plain", "devicon-kotlin-original"],
  },
  {
    name: "Python",
    brand: SiPython,
    fontAwesome: FaPython,
    devicons: ["devicon-python-plain", "devicon-python-original"],
  },
  {
    name: "JavaScript",
    brand: SiJavascript,
    devicons: ["devicon-javascript-plain", "devicon-javascript-original"],
  },
  {
    name: "HTML5",
    brand: SiHtml5,
    fontAwesome: FaHtml5,
    devicons: ["devicon-html5-plain", "devicon-html5-original"],
  },
  {
    name: "CSS3",
    // brand: SiCss3,
    fontAwesome: FaCss3Alt,
    devicons: ["devicon-css3-plain", "devicon-css3-original"],
  },
  {
    name: "React",
    brand: SiReact,
    fontAwesome: FaReact,
    devicons: ["devicon-react-original"],
  },
  {
    name: "Tailwind CSS",
    brand: SiTailwindcss,
    devicons: ["devicon-tailwindcss-original"],
  },
  {
    name: "Vite",
    brand: SiVite,
    devicons: ["devicon-vitejs-plain"],
  },
  {
    name: "Node.js",
    brand: SiNodedotjs,
    fontAwesome: FaNodeJs,
    devicons: ["devicon-nodejs-plain", "devicon-nodejs-original"],
  },
  {
    name: "Express.js",
    brand: SiExpress,
    devicons: ["devicon-express-original"],
  },
  {
    name: "MySQL",
    brand: SiMysql,
    devicons: ["devicon-mysql-plain", "devicon-mysql-original"],
  },
  {
    name: "Firebase",
    brand: SiFirebase,
    devicons: ["devicon-firebase-plain", "devicon-firebase-original"],
  },
  {
    name: "Android",
    fontAwesome: FaAndroid,
    devicons: ["devicon-android-plain", "devicon-android-original"],
  },
  {
    name: "Git",
    brand: SiGit,
    fontAwesome: FaGitAlt,
    devicons: ["devicon-git-plain", "devicon-git-original"],
  },
  {
    name: "GitHub",
    fontAwesome: FaGithub,
    devicons: ["devicon-github-original"],
  },
  {
    name: "Docker",
    brand: SiDocker,
    fontAwesome: FaDocker,
    devicons: ["devicon-docker-plain", "devicon-docker-original"],
  },
  {
    name: "Postman",
    brand: SiPostman,
    devicons: [],
  },
  {
    name: "VS Code",
    // brand: SiVisualstudiocode,
    devicons: ["devicon-vscode-plain"],
  },
  {
    name: "Android Studio",
    brand: SiAndroidstudio,
    devicons: ["devicon-androidstudio-plain"],
  },
];

/* -------------------------------------------------------------------------- */
/*                               SOCIAL ICONS                                 */
/* -------------------------------------------------------------------------- */

const socialIcons = [
  {
    name: "GitHub",
    // lucide: Github,
    brands: [
      { name: "FaGithub", icon: FaGithub },
    ],
  },
  {
    name: "LinkedIn",
    // lucide: Linkedin,
    brands: [
      { name: "FaLinkedin", icon: FaLinkedin },
      // { name: "SiLinkedin", icon: SiLinkedin },
    ],
  },
  {
    name: "Instagram",
    // lucide: Instagram,
    brands: [
      { name: "FaInstagram", icon: FaInstagram },
      { name: "SiInstagram", icon: SiInstagram },
    ],
  },
  {
    name: "YouTube",
    // lucide: Youtube,
    brands: [
      { name: "FaYoutube", icon: FaYoutube },
      { name: "SiYoutube", icon: SiYoutube },
    ],
  },
  {
    name: "Email",
    lucide: Mail,
    brands: [
      { name: "FaEnvelope", icon: FaEnvelope },
      { name: "AtSign", icon: AtSign },
    ],
  },
  {
    name: "Discord",
    lucide: MessageCircle,
    brands: [
      { name: "FaDiscord", icon: FaDiscord },
      { name: "SiDiscord", icon: SiDiscord },
    ],
  },
  {
    name: "X / Twitter",
    lucide: Send,
    brands: [{ name: "FaXTwitter", icon: FaXTwitter }],
  },
];

/* -------------------------------------------------------------------------- */
/*                              GENERAL UI ICONS                              */
/* -------------------------------------------------------------------------- */

const generalIcons = [
  { name: "Home", icons: [House, Home] },
  { name: "About", icons: [User, UserRound, CircleUser] },
  { name: "Projects", icons: [FolderKanban, Folder, Rocket] },
  { name: "Skills", icons: [Brain, Sparkles, Wrench] },
  { name: "Technologies", icons: [Cpu, Blocks, Settings] },
  {
    name: "Experience",
    icons: [BriefcaseBusiness, Briefcase, Building2],
  },
  {
    name: "Education",
    icons: [GraduationCap, School, BookOpen],
  },
  { name: "Certificates", icons: [Award, BadgeCheck, FileText] },
  { name: "Achievements", icons: [Trophy, Award, BadgeCheck] },
  { name: "Competitions", icons: [Medal, Trophy, Award] },
  { name: "Contact", icons: [Mail, Contact, Send] },

  { name: "Calendar", icons: [Calendar, Clock] },
  { name: "Location", icons: [MapPin, Globe] },
  { name: "Company", icons: [Building2, BriefcaseBusiness] },
  { name: "Institute", icons: [School, GraduationCap] },
  { name: "Website", icons: [Globe, ExternalLink, Link] },
  { name: "Phone", icons: [Phone, Smartphone] },

  { name: "View", icons: [Eye, ExternalLink] },
  { name: "Back", icons: [ArrowLeft] },
  { name: "Next", icons: [ArrowRight] },
  { name: "Features", icons: [ListChecks, Sparkles] },
  { name: "Tech Stack", icons: [Layers, Blocks, Cpu] },
  { name: "Gallery", icons: [Images, Eye] },

  { name: "Success", icons: [CircleCheck, BadgeCheck] },
  { name: "Error", icons: [CircleX, X] },
  { name: "Warning", icons: [TriangleAlert, Info] },
  { name: "Info", icons: [Info, CircleCheck] },

  { name: "Close", icons: [X] },
  { name: "Menu", icons: [Menu] },
  { name: "Search", icons: [Search] },
  { name: "Download", icons: [Download] },
  { name: "Expand", icons: [ChevronDown] },
  { name: "Collapse", icons: [ChevronUp] },
];

/* -------------------------------------------------------------------------- */
/*                                 MAIN PAGE                                  */
/* -------------------------------------------------------------------------- */
function SafeIcon({ Icon, size = 30, className = "" }) {
  if (!Icon) {
    return (
      <span className="text-xs text-red-500">
        Missing icon
      </span>
    );
  }

  return <Icon size={size} className={className} />;
}
function IconShowcase() {
  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <PageHeader
          eyebrow="Portfolio Design System"
          title="Complete Icon Showcase"
          description="Compare every major icon style and visual treatment before deciding which icons should be used throughout the portfolio."
        />

        {/* ICON STYLE PREVIEW */}

        <ShowcaseSection
          title="Icon Visual Styles"
          description="The same icon displayed using different UI treatments."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <IconVariant title="Lucide GitHub Icon">
              <IconBox label="Plain" variant="plain">
                {/* <Github size={36} /> */}
              </IconBox>

              <IconBox label="Square" variant="square">
                {/* <Github size={30} /> */}
              </IconBox>

              <IconBox label="Rounded" variant="rounded">
                {/* <Github size={30} /> */}
              </IconBox>

              <IconBox label="Circle" variant="circle">
                {/* <Github size={30} /> */}
              </IconBox>

              <IconBox label="Dark" variant="dark">
                {/* <Github size={30} /> */}
              </IconBox>
            </IconVariant>

            <IconVariant title="Brand GitHub Icon">
              <IconBox label="Plain" variant="plain">
                <FaGithub size={36} />
              </IconBox>

              <IconBox label="Square" variant="square">
                <FaGithub size={30} />
              </IconBox>

              <IconBox label="Rounded" variant="rounded">
                <FaGithub size={30} />
              </IconBox>

              <IconBox label="Circle" variant="circle">
                <FaGithub size={30} />
              </IconBox>

              <IconBox label="Dark" variant="dark">
                <FaGithub size={30} />
              </IconBox>
            </IconVariant>

            <IconVariant title="Devicon GitHub">
              <IconBox label="Plain" variant="plain">
                <i className="devicon-github-original text-4xl" />
              </IconBox>

              <IconBox label="Square" variant="square">
                <i className="devicon-github-original text-3xl" />
              </IconBox>

              <IconBox label="Rounded" variant="rounded">
                <i className="devicon-github-original text-3xl" />
              </IconBox>

              <IconBox label="Circle" variant="circle">
                <i className="devicon-github-original text-3xl" />
              </IconBox>

              <IconBox label="Dark" variant="dark">
                <i className="devicon-github-original text-3xl" />
              </IconBox>
            </IconVariant>
          </div>
        </ShowcaseSection>

        {/* SAME ITEM COMPARISON */}

        <ShowcaseSection
          title="Same Item, Different Libraries"
          description="Compare the same technology, platform or concept across all available icon libraries."
        >
          <div className="space-y-8">
            {comparisons.map((item) => (
              <div
                key={item.name}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div className="border-b border-gray-200 p-6 dark:border-white/10">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>

                <div className="grid lg:grid-cols-3">
                  {/* LUCIDE */}

                  <div className="border-b border-gray-200 p-6 lg:border-b-0 lg:border-r dark:border-white/10">
                    <h4 className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
                      Lucide
                    </h4>

                    <div className="mt-6 flex flex-wrap justify-center gap-5">
                      {item.lucide.map(({ name, icon: Icon }) => (
                        <IconBox key={name} label={name} variant="rounded">
                          <Icon size={32} />
                        </IconBox>
                      ))}
                    </div>
                  </div>

                  {/* BRAND */}

                  <div className="border-b border-gray-200 p-6 lg:border-b-0 lg:border-r dark:border-white/10">
                    <h4 className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
                      Brand / React Icons
                    </h4>

                    <div className="mt-6 flex flex-wrap justify-center gap-5">
                      {item.brands.map(({ name, icon: Icon }) => (
                        <IconBox key={name} label={name} variant="square">
                          <Icon size={32} />
                        </IconBox>
                      ))}
                    </div>
                  </div>

                  {/* DEVICON */}

                  <div className="p-6">
                    <h4 className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
                      Devicon
                    </h4>

                    <div className="mt-6 flex flex-wrap justify-center gap-5">
                      {item.devicons.length ? (
                        item.devicons.map((icon) => (
                          <IconBox key={icon} label={icon} variant="square">
                            <i className={`${icon} text-3xl`} />
                          </IconBox>
                        ))
                      ) : (
                        <p className="text-sm text-gray-400">
                          No Devicon available
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ShowcaseSection>

        {/* SKILL ICON ALTERNATIVES */}

        <ShowcaseSection
          title="Skill Icon Alternatives"
          description="Compare multiple Lucide icons for every general skill before selecting one."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {skillIcons.map((skill) => (
              <div
                key={skill.name}
                className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>

                <div className="mt-6 flex flex-wrap gap-5">
                  {skill.icons.map(({ name, icon: Icon }) => (
                    <IconBox key={name} label={name} variant="rounded">
                     <SafeIcon Icon={Icon} size={30} />
                    </IconBox>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ShowcaseSection>

        {/* TECHNOLOGY ICONS */}

        <ShowcaseSection
          title="Technology Icons"
          description="Compare Simple Icons, Font Awesome brand icons and Devicon variants for each technology."
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => {
              const BrandIcon = technology.brand;
              const FontAwesomeIcon = technology.fontAwesome;

              return (
                <div
                  key={technology.name}
                  className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {technology.name}
                  </h3>

                  <div className="mt-6 flex flex-wrap gap-5">
                    {BrandIcon && (
                      <IconBox label="Simple Icons" variant="rounded">
                        <SafeIcon Icon={BrandIcon} size={30} />
                      </IconBox>
                    )}

                    {FontAwesomeIcon && (
                      <IconBox label="Font Awesome" variant="square">
                        <SafeIcon Icon={FontAwesomeIcon} size={30} />
                      </IconBox>
                    )}

                    {technology.devicons.map((icon) => (
                      <IconBox key={icon} label="Devicon" variant="square">
                        <i className={`${icon} text-3xl`} />
                      </IconBox>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </ShowcaseSection>

        {/* SOCIAL ICONS */}

        <ShowcaseSection
          title="Social Media & Brand Icons"
          description="Compare Lucide alternatives and actual brand icons."
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {socialIcons.map((social) => {
              const LucideIcon = social.lucide;

              return (
                <div
                  key={social.name}
                  className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {social.name}
                  </h3>

                  <div className="mt-6 flex flex-wrap gap-5">
                    <IconBox label="Lucide" variant="rounded">
                      <SafeIcon Icon={LucideIcon} size={30} />
                    </IconBox>

                    {social.brands.map(({ name, icon: Icon }) => (
                      <IconBox key={name} label={name} variant="square">
                        <Icon size={30} />
                      </IconBox>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </ShowcaseSection>

        {/* GENERAL UI ICON ALTERNATIVES */}

        <ShowcaseSection
          title="General UI Icon Alternatives"
          description="Multiple possible Lucide icons for navigation, metadata and actions."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {generalIcons.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </h3>

                <div className="mt-5 flex flex-wrap gap-4">
                 {item.icons.map((Icon, index) => (
  <IconBox
    key={`${item.name}-${index}`}
    label={`Option ${index + 1}`}
    variant={index === 0 ? "rounded" : "square"}
  >
    <SafeIcon Icon={Icon} size={26} />
  </IconBox>
))}
                </div>
              </div>
            ))}
          </div>
        </ShowcaseSection>

        {/* ICON USAGE SIZES */}

        <ShowcaseSection
          title="Recommended Icon Sizes"
          description="See how the same icon looks at the sizes you may use throughout the portfolio."
        >
          <div className="rounded-3xl border border-gray-200 bg-white p-8 dark:border-white/10 dark:bg-white/[0.03]">
            <div className="flex flex-wrap items-end justify-center gap-10">
              <div className="flex flex-col items-center">
                {/* <Github size={16} /> */}
                <span className="mt-3 text-xs text-gray-500">
                  16px Metadata
                </span>
              </div>

              <div className="flex flex-col items-center">
                {/* <Github size={20} /> */}
                <span className="mt-3 text-xs text-gray-500">20px Button</span>
              </div>

              <div className="flex flex-col items-center">
                {/* <Github size={24} /> */}
                <span className="mt-3 text-xs text-gray-500">
                  24px Navigation
                </span>
              </div>

              <div className="flex flex-col items-center">
                {/* <Github size={32} /> */}
                <span className="mt-3 text-xs text-gray-500">32px Card</span>
              </div>

              <div className="flex flex-col items-center">
                {/* <Github size={48} /> */}
                <span className="mt-3 text-xs text-gray-500">48px Feature</span>
              </div>

              <div className="flex flex-col items-center">
                {/* <Github size={72} /> */}
                <span className="mt-3 text-xs text-gray-500">72px Hero</span>
              </div>
            </div>
          </div>
        </ShowcaseSection>
      </div>
    </section>
  );
}

export default IconShowcase;